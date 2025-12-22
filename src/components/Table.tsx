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

  function getOverlap(a: GradeRangeType, b: GradeRangeType): number {
    return Math.max(0, Math.min(a.end, b.end) - Math.max(a.start, b.start))
  }

  function getOverlapRatio(a: GradeRangeType, b: GradeRangeType): number {
    const overlap = getOverlap(a, b)
    const aLength = a.end - a.start
    return Math.round((overlap / aLength) * 100) / 100
  }

  return (
    <div className="relative flex w-full justify-center">
      {gradeSystemsMeta.map((system) => (
        <div key={system.system} className="group relative w-50">
          <div className="bg-neutral-background/70 group-hover:bg-info-container/40 border-neutral-foreground sticky top-24 z-100 border-b px-4 py-2">
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
                      'hover:bg-info-container group-hover:bg-info-container/20 group-[inner] border-neutral-background flex h-full cursor-pointer items-center overflow-hidden rounded-2xl border-2 px-4',
                      isHovered ? 'bg-info-container/70' : 'bg-neutral-container/50',
                      isClicked && 'bg-red-400'
                    )}
                  >
                    <div className="z-10">{grade.value}</div>
                    <div className="bg-info-container group-[inner]:hover: absolute inset-0 z-0"></div>
                    <small className="hidden flex-1 text-right">
                      {grade.start} - {grade.end}
                    </small>
                    <small className="flex-1 text-right">{hoveredGrade && getOverlapRatio(hoveredGrade, grade)}</small>
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
