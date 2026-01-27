import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSystems } from '../context/active-systems/useActiveSystems.ts'
import gradeSystemsMeta from '../data/gradeSystemsMeta.ts'
import { grades } from '../data/grades/index.ts'
import { GRADE_UI_RATIO } from '../helpers/constants.ts'
import { getGradesBySystem } from '../helpers/grades.ts'
import { getOverlap, getOverlapClass, getOverlapRatio, getOverlapStrength } from '../helpers/overlaps.ts'
import { GradeRangeType } from '../types/grade.types.ts'

const Table = () => {
  const { activeSystems } = useActiveSystems()
  const { t } = useTranslation()

  const [hoveredGrade, setHoveredGrade] = useState<GradeRangeType | null>(null)
  const [clickedGrade, setClickedGrade] = useState<GradeRangeType | null>(null)

  const systemsInOrder = activeSystems
    .map((id) => gradeSystemsMeta.find((system) => system.system === id))
    .filter(Boolean)
  const gradesBySystem = useMemo(() => getGradesBySystem(grades), [])

  return (
    <main className="mt-22 min-w-full" role="main">
      <div className="sticky top-22 z-30 -mx-8 flex items-center gap-1 px-8">
        {systemsInOrder.map((system) => {
          const isHovered = system?.system === hoveredGrade?.system
          return (
            system && (
              <div
                key={system.system}
                className={clsx(
                  'border-b-neutral-main relative min-w-24 flex-1 shrink-0 overflow-hidden border-b-2 px-4 py-2',
                  isHovered && 'bg-product-container-dim'
                )}
              >
                <h3
                  className={clsx(
                    'font-semibold text-nowrap text-ellipsis transition-colors duration-150',
                    isHovered && 'text-product-foreground'
                  )}
                >
                  {system.name}
                </h3>
                <div className="text-neutral-main-dim -mt-0.5 text-xs">
                  {system.type === 'climb' ? t('type.climb') : t('type.boulder')}
                </div>
              </div>
            )
          )
        })}
      </div>
      <div className="flex gap-1">
        {systemsInOrder.map(
          (system) =>
            system && (
              <div key={`${system.system}_cell`} className="min-w-24 flex-1">
                {gradesBySystem[system.system].map((grade, index) => {
                  const marginTop = index == 0 ? grade.start : 0
                  const isHovered = hoveredGrade && getOverlap(hoveredGrade, grade) > 0
                  const hoverOverlapRatio = hoveredGrade && getOverlapRatio(hoveredGrade, grade)
                  const isClicked = clickedGrade && getOverlap(clickedGrade, grade) > 0
                  const clickedOverlapRatio = clickedGrade && getOverlapRatio(clickedGrade, grade)
                  return (
                    <div
                      style={{
                        height: (grade.end - grade.start + 1) * GRADE_UI_RATIO,
                        marginTop: marginTop * GRADE_UI_RATIO,
                      }}
                      key={`${grade}-${grade.start}`}
                      onMouseEnter={() => setHoveredGrade(grade)}
                      onMouseLeave={() => setHoveredGrade(null)}
                      onClick={() => setClickedGrade(isClicked ? null : grade)}
                      className={clsx(
                        'hover:bg-product-container-bright border-y-neutral-background-alt relative flex h-full cursor-pointer items-center overflow-hidden rounded-sm border-y-2 px-4 font-mono transition-colors duration-150',
                        getOverlapClass(getOverlapStrength(isHovered, hoverOverlapRatio), 'background'),
                        getOverlapClass(getOverlapStrength(isClicked, clickedOverlapRatio), 'background')
                      )}
                    >
                      <div className="flex-1">{grade.value}</div>
                      {isClicked && <div className="absolute top-1/2 right-2 -translate-1/2">*</div>}
                    </div>
                  )
                })}
              </div>
            )
        )}
      </div>
    </main>
  )
}

export default Table
