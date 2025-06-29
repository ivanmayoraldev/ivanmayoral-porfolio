import Card from "@/components/card"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <Card>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            {t('footerText')}
          </p>
        </div>
      </Card>
    </footer>
  )
} 