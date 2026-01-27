import { useEffect, useState } from 'react'
import { SYSTEMS_DEFAULT, SYSTEMS_STORAGE_KEY } from '../../helpers/constants'
import { GradeSystemId } from '../../types/grade.types'
import { ActiveSystemsContext } from './ActiveSystemsContext'

export function ActiveSystemsProvider({ children }: { children: React.ReactNode }) {
  const [activeSystems, setActiveSystems] = useState<GradeSystemId[]>(() => {
    try {
      const raw = localStorage.getItem(SYSTEMS_STORAGE_KEY)
      return raw ? JSON.parse(raw) : SYSTEMS_DEFAULT
    } catch {
      return SYSTEMS_DEFAULT
    }
  })

  useEffect(() => {
    localStorage.setItem(SYSTEMS_STORAGE_KEY, JSON.stringify(activeSystems))
  }, [activeSystems])

  return (
    <ActiveSystemsContext.Provider value={{ activeSystems, setActiveSystems }}>
      {children}
    </ActiveSystemsContext.Provider>
  )
}
