import { HTMLAttributes } from 'react'
import Logo from './Logo'
import Popup from './Popup'

type AboutPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const AboutPopup = ({ isOpen = false, onClick }: AboutPopupType) => {
  return (
    <Popup isOpen={isOpen} onClick={onClick}>
      <Logo />
    </Popup>
  )
}

export default AboutPopup
