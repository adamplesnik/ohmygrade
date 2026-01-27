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
      <header className="bg-neutral-background-alt/80 fixed top-0 right-0 left-0 z-10 h-36 px-4 pt-8 backdrop-blur-xs md:px-8 lg:px-10">
        <div className="flex items-center gap-8 pl-4">
          <Logo />
          <div className="text-neutral-main-dim hidden sm:block">{t('title')}</div>
          <div className="flex flex-1 justify-end gap-1">
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
        </div>
      </header>
      <ConfigPopup isOpen={openConfigModal} onClick={() => setOpenConfigModal(false)}></ConfigPopup>
      <AboutPopup isOpen={openAboutModal} onClick={() => setOpenAboutModal(false)}></AboutPopup>
    </>
  )
}

export default Header
