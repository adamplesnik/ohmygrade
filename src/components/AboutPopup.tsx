import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import Popup from './Popup'

type AboutPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const AboutPopup = ({ isOpen = false, onClick }: AboutPopupType) => {
  const { t } = useTranslation()
  return (
    <Popup isOpen={isOpen} onClick={onClick}>
      <div className="mt-8 flex flex-col items-center gap-12">
        <Logo large />
        <p className="text-center font-semibold">{t('title')}</p>
        <p className="text-center">{t('about.desc')}</p>
        <p className="text-center">
          {t('about.developed')}
          <br />
          {t('about.by')}{' '}
          <a href="https://adamplesnik.com" className="text-nowrap underline">
            Adam Plesník
          </a>
        </p>
        <p className="text-center">
          MIT –{' '}
          <a
            href="https://github.com/adamplesnik/ohmygrade"
            rel="nofollow"
            target="_blank"
            className="text-nowrap underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </Popup>
  )
}

export default AboutPopup
