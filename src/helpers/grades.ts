import { GradeRangeType, GradeSystemId } from '../types/grade.types'

export function getGradesBySystem(grades: GradeRangeType[]) {
  return grades.reduce<Record<GradeSystemId, GradeRangeType[]>>(
    (acc, grade) => {
      acc[grade.system] ??= []
      acc[grade.system].push(grade)
      return acc
    },
    {} as Record<GradeSystemId, GradeRangeType[]>
  )
}
