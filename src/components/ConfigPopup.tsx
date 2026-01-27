import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSystems } from '../context/active-systems/useActiveSystems'
import gradeSystemsMeta from '../data/gradeSystemsMeta'
import { GradeSystemId } from '../types/grade.types'
import Checkbox from './Checkbox'
import Popup from './Popup'

type ConfigPopupType = { isOpen: boolean } & HTMLAttributes<HTMLDivElement>

const ConfigPopup = ({ isOpen = false, onClick }: ConfigPopupType) => {
  const { t } = useTranslation()
  const { activeSystems, setActiveSystems } = useActiveSystems()

  function toggleSystem(systemId: GradeSystemId) {
    setActiveSystems((prev) => {
      if (prev.includes(systemId) && prev.length === 1) {
        return prev
      }

      return prev.includes(systemId) ? prev.filter((id) => id !== systemId) : [...prev, systemId]
    })
  }

  return (
    <Popup isOpen={isOpen} onClick={onClick} title={t('config.title')}>
      <p className="text-neutral-main-dim mb-8 text-sm">{t('config.desc')}</p>
      <div>
        {gradeSystemsMeta.map((system) => {
          const checked = activeSystems.includes(system.system)

          return (
            <label
              className="hover:bg-neutral-container flex min-h-12 cursor-pointer items-center rounded-lg p-2 transition-colors duration-100"
              key={system.system}
            >
              <Checkbox checked={checked} onChange={() => toggleSystem(system.system)} />
              <h3 className={clsx('px-2 font-semibold text-nowrap text-ellipsis')}>{system.name}</h3>
              <div className="text-neutral-main-dim -mt-0.5 text-xs">
                {system.type === 'climb' ? t('type.climb') : t('type.boulder')}
              </div>
            </label>
          )
        })}
      </div>
    </Popup>
  )
}

export default ConfigPopup
