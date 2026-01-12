import { t } from 'i18next'
import { HTMLAttributes } from 'react'
import Popup from './Popup'

type ConfigPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const ConfigPopup = ({ isOpen = false, onClick }: ConfigPopupType) => {
  return (
    <Popup isOpen={isOpen} onClick={onClick} title={t('config.title')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae
      dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
      doloribus. Odit, aut.
    </Popup>
  )
}

export default ConfigPopup
