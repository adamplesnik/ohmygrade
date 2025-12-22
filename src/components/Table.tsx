import clsx from 'clsx'
import { useMemo, useState } from 'react'
import grades from '../data/grades.ts'
import gradeSystemsMeta from '../data/gradeSystemsMeta.ts'
import { getGradesBySystem } from '../helpers/getGradesBySystem.ts'
import { GradeRangeType } from '../types/grade.types.ts'

export default function Table() {
  const [hoveredGrade, setHoveredGrade] = useState<GradeRangeType | null>(null)
  const [clickedGrade, setClickedGrade] = useState<GradeRangeType | null>(null)
  const gradesBySystem = useMemo(() => getGradesBySystem(grades), [])
  const ratio = 1.5

  function overlaps(a: GradeRangeType, b: GradeRangeType) {
    return a.start <= b.end && b.start <= a.end
  }

  function getRangeLength({ start, end }: GradeRangeType) {
    return (end - start) * ratio
  }

  function getRangeCenter({ start, end }: GradeRangeType) {
    return (start + (end - start) / 2) * ratio
  }

  return (
    <div className="relative flex w-full justify-center">
      {hoveredGrade && (
        <div
          className="border-neutral-foreground-dim/50 pointer-events-none absolute -z-20 w-full -translate-y-1/2 border border-x-0 border-dashed"
          style={{ top: getRangeCenter(hoveredGrade) + 56, height: getRangeLength(hoveredGrade) }}
        ></div>
      )}
      {gradeSystemsMeta.map((system) => (
        <div key={system.system} className="group relative w-50">
          <div className="bg-neutral-background/70 group-hover:bg-neutral-container border-neutral-foreground sticky top-24 z-100 border-b px-4 py-2">
            <h3 className="font-semibold">{system.name}</h3>
            <div className="text-neutral-foreground-dim -mt-0.5 text-xs">{system.type}</div>
          </div>
          <div className="relative font-mono">
            {(gradesBySystem[system.system] || []).map((grade, index) => {
              const marginTop = index == 0 ? grade.start : 0
              const isHovered = hoveredGrade && overlaps(hoveredGrade, grade)
              const isClicked = clickedGrade && overlaps(clickedGrade, grade)
              return (
                <div
                  style={{
                    height: (grade.end - grade.start + 1) * ratio,
                    marginTop: marginTop * ratio,
                  }}
                >
                  <div
                    key={grade.value}
                    onMouseEnter={() => setHoveredGrade(grade)}
                    onMouseLeave={() => setHoveredGrade(null)}
                    onClick={() => (isClicked ? setClickedGrade(null) : setClickedGrade(grade))}
                    className={clsx(
                      'hover:bg-info-container border-neutral-background flex h-full cursor-pointer items-center rounded-2xl border-2 px-4',
                      isHovered ? 'bg-neutral-foreground-dim/20' : 'bg-neutral-container',
                      isClicked && 'bg-product-foreground/30'
                    )}
                  >
                    {grade.value}{' '}
                    <small className="flex-1 text-right">
                      {grade.start} - {grade.end}
                    </small>
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
