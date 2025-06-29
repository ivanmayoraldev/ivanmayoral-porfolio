import { ExternalLink, Calendar, MapPin } from "lucide-react"
import Card from "@/components/card"
import { Fade } from "react-awesome-reveal"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

const workData = [
  {
    id: 1,
    time: "2021 - 2024",
    companyUrl: "https://youtube.com/@Peereira7",
    companyName: "Peereira7 Channel",
    location: "Madrid, Spain",
    technologies: [
      "Adobe Creative Suite",
      "DaVinci Resolve",
      "After Effects",
      "Premiere Pro",
      "Photoshop",
      "Social Media Management",
    ],
    workKey: "peereira7"
  },
]

export default function WorkExperience() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl p-4 text-neutral-800 dark:text-neutral-100 sm:p-8">
      <h1 className="mb-8 text-center text-5xl font-bold sm:text-5xl lg:text-5xl">
        {t('workExperience')}
      </h1>
      <Card>
        <Fade>
          <div className="space-y-6 sm:space-y-8">
            {workData.map((work) => (
              <WorkItem key={work.id} {...work} />
            ))}
          </div>
        </Fade>
      </Card>
    </section>
  )
}

function WorkItem({
  time,
  companyUrl,
  companyName,
  technologies,
  workKey,
}: {
  time: string
  companyUrl: string
  companyName: string
  technologies: string[]
  workKey: string
}) {
  const { t, language } = useLanguage();
  const workInfo = translations[language].workData[workKey];
  
  const handleClick = () => {
    window.open(companyUrl, "_blank")
  }

  return (
    <div className="group relative">
      {/* Card principal */}
      <div className="rounded-xl border border-neutral-200 p-4 duration-200 hover:bg-neutral-300/20 dark:border-neutral-700 dark:hover:bg-neutral-800/20 sm:p-6">
        {/* Header con información de la empresa */}
        <div className="mb-4 flex flex-col sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold leading-tight text-neutral-800 transition-colors group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-400 sm:text-xl">
                  {workInfo?.title || "VFX & GFX Creator | Channel Manager"}
              </h3>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </div>
            <div className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {workInfo?.companyName || "Peereira7 Channel"}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{workInfo?.location || "Madrid, Spain"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:mb-6 sm:text-base">
          {workInfo?.description || "Led creative direction and production for a successful YouTube channel with over 3 years of experience in video editing, motion graphics, and visual effects. Managed social media presence, designed thumbnails and banners, and coordinated content strategy. Developed expertise in Adobe Creative Suite, DaVinci Resolve, and After Effects while building a strong portfolio of digital content."}
        </p>

        {/* Tecnologías */}
        <div className="mb-4 sm:mb-6">
          <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {t('technologies')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-300 bg-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 sm:px-3"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="mb-4 sm:mb-6">
          <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {t('keyAchievements')}
          </h4>
          <ul className="space-y-2">
            {workInfo?.achievements?.map((achievement: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            )) || [
              "Managed successful YouTube channel with consistent content strategy",
              "Created high-quality thumbnails and banners for video content",
              "Developed expertise in video editing and motion graphics",
              "Coordinated social media presence across multiple platforms",
            ].map((achievement: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {t('workShowcase')}
          </h4>
          <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
            {/* Placeholder image - replace with video later */}
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800">
              <div className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-600 sm:mb-3 sm:h-16 sm:w-16">
                  <svg
                    className="h-6 w-6 text-neutral-500 dark:text-neutral-400 sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg dark:bg-neutral-800/90 sm:h-16 sm:w-16">
                <svg
                  className="ml-0.5 h-4 w-4 text-neutral-700 dark:text-neutral-300 sm:ml-1 sm:h-6 sm:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay clickeable */}
        <button
          onClick={handleClick}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 hover:opacity-100"
          aria-label={`Visit ${companyName}`}
        />
      </div>
    </div>
  )
}
