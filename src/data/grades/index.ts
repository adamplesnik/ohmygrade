import { GradeRangeType } from '../../types/grade.types'
import { ausGrades } from './climb/aus'
import { braGrades } from './climb/bra'
import { finGrades } from './climb/fin'
import { fraGrades } from './climb/fra'
import { nccsGrades } from './climb/nccs'
import { norGrades } from './climb/nor'
import { polGrades } from './climb/pol'
import { rusGrades } from './climb/rus'
import { saGrades } from './climb/sa'
import { saoGrades } from './climb/sao'
import { saxGrades } from './climb/sax'
import { sweGrades } from './climb/swe'
import { uiaaGrades } from './climb/uiaa'
import { ukGrades } from './climb/uk'
import { ydsGrades } from './climb/yds'

export const grades: GradeRangeType[] = [
  ...ausGrades,
  ...braGrades,
  ...finGrades,
  ...fraGrades,
  ...nccsGrades,
  ...norGrades,
  ...polGrades,
  ...rusGrades,
  ...saGrades,
  ...saoGrades,
  ...saxGrades,
  ...sweGrades,
  ...uiaaGrades,
  ...ukGrades,
  ...ydsGrades,
]
