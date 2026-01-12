import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'

type ConfigPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const ConfigPopup = ({ isOpen = false, onClick }: ConfigPopupType) => {
  const { t } = useTranslation()

  return (
    <Popup isOpen={isOpen} onClick={onClick} title={t('config.title')}>
      <p className="text-neutral-foreground-dim mb-8 text-sm">{t('config.desc')}</p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae
      dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
      doloribus. Odit, aut.
    </Popup>
  )
}

export default ConfigPopup
