import { useMemo } from 'react'
import grades from '../data/grades.ts'
import gradeSystemsMeta from '../data/gradeSystemsMeta.ts'
import { getGradesBySystem } from '../helpers/getGradesBySystem.ts'

export default function Table() {
  const gradesBySystem = useMemo(() => getGradesBySystem(grades), [])

  return (
    <div className="flex w-full justify-center">
      {gradeSystemsMeta.map((system) => (
        <div key={system.system} className="w-50">
          <div className="border-neutral-foreground bg-neutral-background/70 sticky top-24 z-20 border-b px-4 py-2">
            <h3 className="font-semibold">{system.name}</h3>
            <div className="text-neutral-foreground-dim -mt-0.5 text-xs">{system.type}</div>
          </div>
          <div className="relative font-mono">
            {(gradesBySystem[system.system] || []).map((grade, index) => {
              const marginTop = index == 0 ? grade.start : 0
              return (
                <div
                  key={grade.value}
                  className="border-neutral-outline bg-neutral-container hover:bg-neutral-foreground-dim flex w-full items-center border px-4"
                  style={{ top: grade.start, height: grade.end - grade.start, marginTop: marginTop }}
                >
                  {grade.value}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
