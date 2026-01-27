export type GradeSystemId =
  | 'bra'
  | 'ew'
  | 'fin'
  | 'fra'
  | 'nccs'
  | 'nor'
  | 'pol'
  | 'rus'
  | 'sa'
  | 'sax'
  | 'swe'
  | 'uiaa'
  | 'uk'
  | 'yds'

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
