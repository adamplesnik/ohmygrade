import { useTranslation } from 'react-i18next'
import Button from './Button'
import Logo from './Logo'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="bg-neutral-background-alt sticky top-0 z-10 flex items-center gap-8 pt-6 pb-4 md:pt-8 lg:pt-10">
      <Logo />
      <div className="text-neutral-foreground-dim flex-1">{t('title')}</div>
      <div className="hidden justify-end gap-1 md:flex">
        <Button value={t('config.buttonValue')} />
        <Button value={t('about.buttonValue')} />
      </div>
    </header>
  )
}

export default Header
