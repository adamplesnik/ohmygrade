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
    <main className="mt-24 min-w-full" role="main">
      <div className="bg-neutral-background-alt/50 border-neutral-outline/50 sticky top-24 z-30 flex w-fit min-w-full items-center gap-2 rounded-full border backdrop-blur-xs">
        {systemsInOrder.map(
          (system) =>
            system && (
              <div key={system.system} className="min-w-30 flex-1 overflow-hidden px-4 py-2">
                <h3 className="group-hover:text-product-foreground font-semibold text-nowrap text-ellipsis">
                  {system.name}
                </h3>
                <div className="text-neutral-foreground-dim -mt-0.5 text-xs">
                  {system.type == 'climb' ? t('type.climb') : t('type.boulder')}
                </div>
              </div>
            )
        )}
      </div>
      <div className="flex w-fit min-w-full gap-2">
        {systemsInOrder.map(
          (system) =>
            system && (
              <div key={`${system.system}_cell`} className="group min-w-30 flex-1">
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
                      onClick={() => (isClicked ? setClickedGrade(null) : setClickedGrade(grade))}
                      className={clsx(
                        'hover:bg-product-container-bright border-y-neutral-background-alt relative flex h-full cursor-pointer items-center overflow-hidden rounded-2xl border-y-2 px-4 font-mono transition-colors duration-150',
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
