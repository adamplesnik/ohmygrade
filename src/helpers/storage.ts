import { GradeSystemId } from '../types/grade.types'
import { STORAGE_KEY } from './constants'

export function loadSystems(): GradeSystemId[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveSystems(systems: GradeSystemId[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(systems))
}
