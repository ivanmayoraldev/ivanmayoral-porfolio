import SocialLinks from "./social-links"
import LanguageSelector from "./language-selector"
import { useLanguage } from "@/contexts/LanguageContext"

const porfData = {
  img: "/logo-web.png",
  name: "Iván Mayoral Capel",
  location: "Madrid, Spain",
  contactEmail: "ivanmayoral.dev@gmail.com",
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <>
      <section className="w-full mx-auto max-w-7xl pb-6 text-neutral-800 dark:text-neutral-100 sm:pb-8">
        <div className="px-3 py-6 sm:px-4 sm:py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center gap-6 text-center sm:gap-8 lg:items-start lg:text-left">
              <div className="flex flex-col items-center lg:items-start w-full">
                <div className="mb-8 flex flex-col items-center lg:items-start gap-4 w-full">
                  <h1 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                    {t('title')}
                  </h1>
                  <div className="flex justify-center lg:justify-start w-full mt-4">
                    <LanguageSelector />
                  </div>
                </div>
                <span className="mb-2 mt-2 block text-lg font-bold text-neutral-900 dark:text-neutral-100 sm:mb-3 sm:text-xl">
                  {t('subtitle')}
                </span>
                <p className="max-w-md text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  {t('description')}
                </p>
              </div>
              <SocialLinks />
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={porfData.img}
                alt="Iván Mayoral"
                className="h-48 w-48 rounded-full border-4 border-neutral-200 object-cover shadow-2xl dark:border-neutral-700 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
