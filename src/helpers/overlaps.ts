import { GradeRangeType } from '../types/grade.types'
import { OverlapStrength, OverlapVisual } from '../types/overlap.types'
import { STRONG_OVERLAP_THRESHOLD } from './constants'

const overlapClassMap = {
  background: {
    none: 'bg-neutral-background',
    weak: 'bg-product-container-dim',
    strong: 'bg-product-container',
  },
  opacity: {
    none: 'opacity-0',
    weak: 'opacity-40',
    strong: 'opacity-70',
  },
} satisfies Record<OverlapVisual, Record<OverlapStrength, string>>

export function getOverlap(a: GradeRangeType, b: GradeRangeType): number {
  return Math.max(0, Math.min(a.end, b.end) - Math.max(a.start, b.start))
}

export function getOverlapRatio(a: GradeRangeType, b: GradeRangeType): number {
  const overlap = getOverlap(a, b)
  const aLength = a.end - a.start
  return Math.round((overlap / aLength) * 100) / 100
}

export function getOverlapStrength(isActive: boolean | null, hoverOverlapRatio: number | null): OverlapStrength {
  if (!isActive) return 'none'
  if (hoverOverlapRatio != null && hoverOverlapRatio >= STRONG_OVERLAP_THRESHOLD) return 'strong'
  return 'weak'
}

export function getOverlapClass(strength: OverlapStrength, visual: OverlapVisual) {
  return overlapClassMap[visual][strength]
}
