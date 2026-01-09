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
  const RATIO = 1.5
  const STRONG_OVERLAP_THRESHOLD = 0.5

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

  type OverlapStrength = 'none' | 'weak' | 'strong'

  function getOverlapStrength(isActive: boolean | null, hoverOverlapRatio: number | null): OverlapStrength {
    if (!isActive) return 'none'
    if (hoverOverlapRatio != null && hoverOverlapRatio >= STRONG_OVERLAP_THRESHOLD) return 'strong'
    return 'weak'
  }

  const overlapStrengthClasses: Record<OverlapStrength, string> = {
    none: 'bg-neutral-background',
    weak: 'bg-product-container-dim',
    strong: 'bg-product-container',
  }

  return (
    <div className="relative flex w-full justify-center gap-1">
      {gradeSystemsMeta.map((system) => (
        <div key={system.system} className="group w-50">
          <div className="bg-neutral-background-alt border-neutral-foreground sticky top-24 z-100 border-b px-4 py-2">
            <h3 className="font-semibold">{system.name}</h3>
            <div className="text-neutral-foreground-dim -mt-0.5 text-xs">{system.type}</div>
          </div>
          <div className="font-mono">
            {(gradesBySystem[system.system] || []).map((grade, index) => {
              const marginTop = index == 0 ? grade.start : 0
              const isHovered = hoveredGrade && overlaps(hoveredGrade, grade)
              const hoverOverlapRatio = hoveredGrade && getOverlapRatio(hoveredGrade, grade)
              const isClicked = clickedGrade && overlaps(clickedGrade, grade)
              const clickedOverlapRatio = clickedGrade && getOverlapRatio(clickedGrade, grade)
              return (
                <div
                  style={{
                    height: (grade.end - grade.start + 1) * RATIO,
                    marginTop: marginTop * RATIO,
                  }}
                >
                  <div
                    key={grade.value}
                    onMouseEnter={() => setHoveredGrade(grade)}
                    onMouseLeave={() => setHoveredGrade(null)}
                    onClick={() => (isClicked ? setClickedGrade(null) : setClickedGrade(grade))}
                    className={clsx(
                      'hover:bg-product-container-bright border-y-neutral-background-alt flex h-full cursor-pointer items-center overflow-hidden border-y-2 px-4 transition-all',
                      overlapStrengthClasses[getOverlapStrength(isHovered, hoverOverlapRatio)],
                      overlapStrengthClasses[getOverlapStrength(isClicked, clickedOverlapRatio)]
                    )}
                  >
                    <div className="flex-1">{grade.value}</div>
                    {isClicked && <div className="bg-product-container-bright size-2 rounded-full"></div>}
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
