import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import Popup from './Popup'

type AboutPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const AboutPopup = ({ isOpen = false, onClick }: AboutPopupType) => {
  const { t } = useTranslation()
  return (
    <Popup isOpen={isOpen} onClick={onClick}>
      <div className="mt-2 flex flex-col items-center gap-12">
        <div className="w-52">
          <Logo />
        </div>
        <p className="text-center font-semibold">{t('title')}</p>
        <p className="text-center">{t('about.desc')}</p>
        <p className="text-center">
          {t('about.developed')}
          <br />
          {t('about.by')}{' '}
          <a href="https://adamplesnik.com" className="text-nowrap underline" target="_blank">
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
        <p className="text-center text-sm">
          {t('about.data')}{' '}
          <a
            href="https://en.wikipedia.org/wiki/Grade_(climbing)#Comparison_tables"
            rel="nofollow"
            target="_blank"
            className="text-nowrap underline"
          >
            Wikipedia
          </a>
          ,{' '}
          <a
            href="https://www.thecrag.com/en/article/grades"
            rel="nofollow"
            target="_blank"
            className="text-nowrap underline"
          >
            theCrag
          </a>
        </p>
      </div>
    </Popup>
  )
}

export default AboutPopup
