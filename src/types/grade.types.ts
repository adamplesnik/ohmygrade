export type GradeSystemId = 'ew' | 'yds' | 'uiaa' | 'fr' | 'uk'

export type GradeRangeType = {
  system: GradeSystemId
  value: string
  start: number
  end: number
}

export type GradeSystemMetaType = {
  system: GradeSystemId
  name: string
  type: 'climb' | 'boulder'
  desc?: string
}
