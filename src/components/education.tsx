import { GraduationCap } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const edData = [
  {
    id: 1,
    time: "2025 - Actually",
    educationUrl: "https://www.unir.net/ingenieria/grado-informatica/",
    educationName: "UNIR: Universidad Internacional de la Rioja",
    educationKey: "computerEngineering"
  },
  {
    id: 2,
    time: "2023 - 2025",
    educationUrl: "https://www.juanxxiii.net/tecnico-superior-en-desarrollo-de-aplicaciones-web/",
    educationName: "CFP JuanXXIII",
    educationKey: "daw"
  },
];

export default function ListEduExp() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col max-w-7xl justify-between py-8 sm:py-12 lg:py-16">
      <h1 className="text-5xl sm:text-5xl lg:text-5xl font-bold text-center mb-8">{t('educationTitle')}</h1>
      <Fade>
        <div className="relative max-w-5xl w-full mx-auto px-3 sm:px-4">
          {/* Línea central - en mobile a la izquierda, en desktop centrada */}
          <div className="absolute top-0 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-full w-0.5 bg-yellow-600 dark:bg-yellow-500"></div>
          <ol className="relative items-center flex flex-col space-y-6 sm:space-y-8">
            {edData.map((education, index) => (
              <EducationItem
                key={education.id}
                {...education}
                position={index === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>
      </Fade>
    </div>
  );
}

function EducationItem({
  time,
  educationUrl,
  educationName,
  educationKey,
  position,
}: {
  time: string;
  educationUrl: string;
  educationName: string;
  educationKey: string;
  position: "left" | "right";
}) {
  const { language } = useLanguage();
  const educationInfo = translations[language].educationData[educationKey];
  
  const handleClick = () => {
    window.open(educationUrl, "_blank");
  };

  return (
    <li className="flex justify-center sm:justify-start relative w-full">
      {/* Contenido clickeable */}
      <div
        onClick={handleClick}
        className={`rounded-xl p-3 sm:p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 w-full max-w-xs sm:max-w-sm cursor-pointer border border-transparent hover:border-neutral-300 dark:hover:border-neutral-600 sm:text-left ${
          position === "left" ? "sm:mr-auto sm:ml-0 sm:mr-1/4" : "sm:ml-auto sm:mr-0 sm:ml-1/4"
        }`}
      >
        <time className="mb-2 font-mono text-xs font-normal leading-none text-yellow-600 dark:text-yellow-500">
          {time}
        </time>
        <div className="mt-1 flex flex-col space-y-0.5">
          <h3 className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">
            {educationInfo?.title || "Computer Engineering"}
          </h3>
          <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-400 opacity-80 duration-150 hover:opacity-100">
            {educationName}
          </span>
          <ul className="py-2 sm:py-3">
            {educationInfo?.details?.map((detail, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                {detail}
              </li>
            )) || [
              "Currently pursuing the first year of Computer Engineering degree, focusing on the Software Engineering track. This comprehensive program covers advanced software development methodologies, system architecture design, database management, and emerging technologies like AI and cloud computing. The curriculum emphasizes practical problem-solving skills and industry-standard development practices."
            ].map((detail, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
} 