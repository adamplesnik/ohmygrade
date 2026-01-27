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

  const visibleGradeSystems = gradeSystemsMeta.filter((system) => system.visible)

  function toggleSystem(checkedSystem: GradeSystemId) {
    setActiveSystems((prev) => {
      if (prev.includes(checkedSystem) && prev.length === 1) {
        return prev
      }

      return prev.includes(checkedSystem) ? prev.filter((id) => id !== checkedSystem) : [checkedSystem, ...prev]
    })
  }

  return (
    <Popup isOpen={isOpen} onClick={onClick} title={t('config.title')}>
      <p className="text-neutral-main-dim mb-8 text-sm">{t('config.desc')}</p>
      <div className="bg-neutral-main text-neutral-on-main ml-auto w-fit -translate-y-5 -rotate-4 rounded-md p-2 font-mono text-xs font-medium">
        {t('config.soon')}
      </div>
      <div>
        {visibleGradeSystems.map((system) => {
          const checked = activeSystems.includes(system.system)
          const isLastActive = checked && activeSystems.length === 1

          return (
            <label
              className={clsx(
                'hover:bg-neutral-container active:bg-neutral-container flex min-h-12 items-center rounded-lg p-2 transition-colors duration-100',
                isLastActive ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              )}
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
