export type GradeSystemId = 'ew' | 'yds' | 'uiaa' | 'fr' | 'uk'

export type GradeRange = {
  system: GradeSystemId
  value: string
  start: number
  end: number
}

export type GradeSystemMeta = {
  system: GradeSystemId
  name: string
  type: 'climb' | 'boulder'
  desc?: string
}
