import { GradeRangeType } from '../../types/grade.types'
import { braGrades } from './climb/bra'
import { ewGrades } from './climb/ew'
import { finGrades } from './climb/fin'
import { fraGrades } from './climb/fra'
import { nccsGrades } from './climb/nccs'
import { norGrades } from './climb/nor'
import { polGrades } from './climb/pol'
import { rusGrades } from './climb/rus'
import { saGrades } from './climb/sa'
import { saxGrades } from './climb/sax'
import { sweGrades } from './climb/swe'
import { uiaaGrades } from './climb/uiaa'
import { ukGrades } from './climb/uk'
import { ydsGrades } from './climb/yds'

export const grades: GradeRangeType[] = [
  ...braGrades,
  ...ewGrades,
  ...finGrades,
  ...fraGrades,
  ...nccsGrades,
  ...norGrades,
  ...polGrades,
  ...rusGrades,
  ...saGrades,
  ...saxGrades,
  ...sweGrades,
  ...uiaaGrades,
  ...ukGrades,
  ...ydsGrades,
]
