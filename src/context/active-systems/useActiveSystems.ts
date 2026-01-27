import { useContext } from 'react'
import { ActiveSystemsContext } from './ActiveSystemsContext'

export function useActiveSystems() {
  const context = useContext(ActiveSystemsContext)

  if (!context) {
    throw new Error('useActiveSystems must be used within ActiveSystemsProvider')
  }

  return context
}
