import { createContext } from 'react'
import { GradeSystemId } from '../../types/grade.types'

type ActiveSystemsContextValue = {
  activeSystems: GradeSystemId[]
  setActiveSystems: React.Dispatch<React.SetStateAction<GradeSystemId[]>>
}

export const ActiveSystemsContext = createContext<ActiveSystemsContextValue | null>(null)
