import { Github, Linkedin, Mail} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SocialLinks() {
  const { t } = useLanguage();

  const socialLinks = [
    { 
      icon: "", 
      text: t('openToWork'),
      isOpenToWork: true
    },
    { url: "https://github.com/ivanmayoraldev", icon: Github, text: "GitHub" },
    { url: "https://www.linkedin.com/in/iván-mayoral-8288a1331/", icon: Linkedin, text: "LinkedIn" },
    { url: "/cv.pdf", icon: Mail, text: "CV" },
  ];

  return (
    <div className="flex gap-2 sm:gap-3">
      {socialLinks.map((link, index) => {
        const commonClasses = `inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
          link.text === "CV"
            ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
            : "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 hover:scale-105 border border-neutral-300 dark:border-neutral-600"
        }`;

        if (link.isOpenToWork) {
          return (
            <div key={index} className={commonClasses}>
              <span className="flex size-2 items-center">
                <span className="absolute inline-flex size-1.5 animate-ping rounded-xl bg-green-600 dark:bg-green-400"></span>
                <span className="relative inline-flex size-1.5 rounded-xl bg-green-600 dark:bg-green-400"></span>
              </span>
              <span className="sm:inline">{link.text}</span>
            </div>
          );
        }

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={commonClasses}
            aria-label={`Link to ${link.text}`}
          >
            <link.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="sm:inline">{link.text}</span>
          </a>
        );
      })}
    </div>
  );
} 