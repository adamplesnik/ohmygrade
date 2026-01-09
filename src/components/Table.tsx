import clsx from 'clsx'
import { useMemo, useState } from 'react'
import grades from '../data/grades.ts'
import gradeSystemsMeta from '../data/gradeSystemsMeta.ts'
import { GRADE_UI_RATIO } from '../helpers/constants.ts'
import { getGradesBySystem } from '../helpers/grades.ts'
import { getOverlap, getOverlapClass, getOverlapRatio, getOverlapStrength } from '../helpers/overlaps.ts'
import { GradeRangeType } from '../types/grade.types.ts'

export default function Table() {
  const [hoveredGrade, setHoveredGrade] = useState<GradeRangeType | null>(null)
  const [clickedGrade, setClickedGrade] = useState<GradeRangeType | null>(null)
  const gradesBySystem = useMemo(() => getGradesBySystem(grades), [])

  return (
    <div className="relative flex w-full justify-center gap-1">
      {gradeSystemsMeta.map((system) => (
        <div key={system.system} className="group w-50">
          <div className="bg-neutral-background-alt border-neutral-foreground sticky top-24 z-100 border-b px-4 py-2">
            <h3 className="group-hover:text-product-foreground font-semibold">{system.name}</h3>
            <div className="text-neutral-foreground-dim -mt-0.5 text-xs">{system.type}</div>
          </div>
          <div className="font-mono">
            {(gradesBySystem[system.system] || []).map((grade, index) => {
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
                >
                  <div
                    key={grade.value}
                    onMouseEnter={() => setHoveredGrade(grade)}
                    onMouseLeave={() => setHoveredGrade(null)}
                    onClick={() => (isClicked ? setClickedGrade(null) : setClickedGrade(grade))}
                    className={clsx(
                      'hover:bg-product-container-bright border-y-neutral-background-alt flex h-full cursor-pointer items-center overflow-hidden border-y-2 px-4 transition-all',
                      getOverlapClass(getOverlapStrength(isHovered, hoverOverlapRatio), 'background'),
                      getOverlapClass(getOverlapStrength(isClicked, clickedOverlapRatio), 'background')
                    )}
                  >
                    <div className="flex-1">{grade.value}</div>
                    {isClicked && <div className={clsx('bg-neutral-foreground flex size-2 rounded-full')}></div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
