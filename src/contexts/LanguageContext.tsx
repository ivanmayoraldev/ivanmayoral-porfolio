import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.es) => string
  tProject: (projectKey: string, field: 'title' | 'description') => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      // Default to Spanish
      setLanguage('es')
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: keyof typeof translations.es): string => {
    return translations[language][key]
  }

  const tProject = (projectKey: string, field: 'title' | 'description'): string => {
    const project = translations[language].projects[projectKey]
    return project ? project[field] : ''
  }

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
    tProject
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 