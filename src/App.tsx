import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect, useState } from "react"
import Particles from "@/components/particles"
import ParticlesLight from "@/components/particles-light"
import HomePage from "@/pages/HomePage"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check initial theme
    const checkDarkMode = () => {
      return document.documentElement.classList.contains('dark')
    }
    
    setIsDarkMode(checkDarkMode())
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(checkDarkMode())
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      {isDarkMode ? (
        <Particles className="fixed inset-0 -z-10" quantity={120} />
      ) : (
        <ParticlesLight className="fixed inset-0 -z-10" quantity={120} />
      )}
      <main className="mx-auto mt-4 flex w-full flex-col gap-6 p-5 duration-1000 ease-out animate-in fade-in md:max-w-4xl">
        <HomePage />
      </main>
      <Analytics />
      <SpeedInsights />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Iván Mayoral",
            url: "https://ivanmayoral.com",
            image: "/logo.png",
            sameAs: [
              "https://twitter.com/ivanmayoraldev",
              "https://github.com/ivanmayoraldev",
              "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/",
              "https://www.instagram.com/ivanmayoraldev",
              "https://www.twitch.tv/ivanmayoraldev"
            ],
          }),
        }}
      />
    </LanguageProvider>
  )
} 