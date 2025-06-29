import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="relative">
      <div className="flex relative bg-white/5 rounded-2xl backdrop-blur-xl shadow-[inset_1px_1px_4px_rgba(255,255,255,0.2),inset_-1px_-1px_6px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.15)] overflow-hidden w-fit">
        <input 
          type="radio" 
          name="language" 
          id="glass-es" 
          checked={language === 'es'}
          onChange={() => handleLanguageChange('es')}
          className="hidden"
        />
        <label 
          htmlFor="glass-es" 
          className="flex-1 flex items-center justify-center min-w-[40px] text-sm px-4 py-3 cursor-pointer font-semibold tracking-wide text-black dark:text-white relative z-10 transition-colors duration-300"
        >
          Español
        </label>

        <input 
          type="radio" 
          name="language" 
          id="glass-en" 
          checked={language === 'en'}
          onChange={() => handleLanguageChange('en')}
          className="hidden"
        />
        <label 
          htmlFor="glass-en" 
          className="flex-1 flex items-center justify-center min-w-[40px] text-sm px-4 py-3 cursor-pointer font-semibold tracking-wide text-black dark:text-white relative z-10 transition-colors duration-300"
        >
          English
        </label>

        <div 
          className={`absolute top-0 bottom-0 w-1/2 rounded-2xl z-0 transition-all duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)] ${
            language === 'es' 
              ? 'translate-x-0 bg-gradient-to-br from-slate-400/30 to-slate-300 shadow-[0_0_18px_rgba(148,163,184,0.5),0_0_10px_rgba(255,255,255,0.4)_inset]' 
              : 'translate-x-full bg-gradient-to-br from-blue-400/30 to-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.5),0_0_10px_rgba(191,219,254,0.4)_inset]'
          }`}
        />
      </div>
    </div>
  )
} 