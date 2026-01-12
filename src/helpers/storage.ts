import { GradeSystemId } from '../types/grade.types'
import { SYSTEMS_STORAGE_KEY } from './constants'

export function loadSystems(): GradeSystemId[] | null {
  try {
    const raw = localStorage.getItem(SYSTEMS_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveSystems(systems: GradeSystemId[]) {
  localStorage.setItem(SYSTEMS_STORAGE_KEY, JSON.stringify(systems))
}
