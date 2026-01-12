import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './Button'
import Logo from './Logo'
import Popup from './Popup'

const Header = () => {
  const [openConfigModal, setOpenConfigModal] = useState(false)

  const { t } = useTranslation()

  return (
    <>
      <header className="bg-neutral-background-alt sticky top-0 z-10 flex items-center gap-8 pt-6 pb-4 md:pt-8 lg:pt-10">
        <Logo />
        <div className="text-neutral-foreground-dim flex-1">{t('title')}</div>
        <div className="hidden justify-end gap-1 md:flex">
          <Button onClick={() => setOpenConfigModal(true)}>{t('config.buttonValue')}</Button>
          <Button>{t('about.buttonValue')}</Button>
        </div>
      </header>
      <Popup isOpen={openConfigModal} onClick={() => setOpenConfigModal(false)} title={t('config.title')}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae
        dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
        doloribus. Odit, aut.
      </Popup>
    </>
  )
}

export default Header
