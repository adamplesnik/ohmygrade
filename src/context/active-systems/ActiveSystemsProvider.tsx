import { useEffect, useState } from 'react'
import { DEFAULT_SYSTEMS, STORAGE_KEY } from '../../helpers/constants'
import { GradeSystemId } from '../../types/grade.types'
import { ActiveSystemsContext } from './ActiveSystemsContext'

export function ActiveSystemsProvider({ children }: { children: React.ReactNode }) {
  const [activeSystems, setActiveSystems] = useState<GradeSystemId[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : DEFAULT_SYSTEMS
    } catch {
      return DEFAULT_SYSTEMS
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activeSystems))
  }, [activeSystems])

  return (
    <ActiveSystemsContext.Provider value={{ activeSystems, setActiveSystems }}>
      {children}
    </ActiveSystemsContext.Provider>
  )
}
