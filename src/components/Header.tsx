import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutPopup from './AboutPopup'
import Button from './Button'
import ConfigPopup from './ConfigPopup'
import Logo from './Logo'

const Header = () => {
  const [openAboutModal, setOpenAboutModal] = useState(false)
  const [openConfigModal, setOpenConfigModal] = useState(false)

  const closeModals = () => {
    setOpenAboutModal(false)
    setOpenConfigModal(false)
  }

  const { t } = useTranslation()

  return (
    <>
      <header className="bg-neutral-background-alt sticky top-0 z-10 flex items-center gap-8 pt-6 pb-4 md:pt-8 lg:pt-10">
        <Logo />
        <div className="text-neutral-foreground-dim flex-1">{t('title')}</div>
        <div className="flex justify-end gap-1">
          <Button
            onClick={() => {
              closeModals()
              setOpenConfigModal(true)
            }}
          >
            {t('config.buttonValue')}
          </Button>
          <Button
            onClick={() => {
              closeModals()
              setOpenAboutModal(true)
            }}
          >
            {t('about.buttonValue')}
          </Button>
        </div>
      </header>
      <ConfigPopup isOpen={openConfigModal} onClick={() => setOpenConfigModal(false)}></ConfigPopup>
      <AboutPopup isOpen={openAboutModal} onClick={() => setOpenAboutModal(false)}></AboutPopup>
    </>
  )
}

export default Header
