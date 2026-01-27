import clsx from 'clsx'
import { Check } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { LUCIDE_SIZE, LUCIDE_STROKE } from '../helpers/constants'

type CheckboxType = { checked: boolean } & HTMLAttributes<HTMLInputElement>

const Checkbox = ({ checked = false, onChange }: CheckboxType) => {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} className={clsx('peer appearance-none')} />
      <div
        className={clsx(
          'border-neutral-main-dim peer-checked:bg-neutral-main peer-checked:border-neutral-main flex size-6 items-center justify-center rounded-lg border transition-colors'
        )}
      >
        <Check
          size={LUCIDE_SIZE}
          strokeWidth={LUCIDE_STROKE}
          className={clsx('text-neutral-on-main transition-opacity', checked ? 'opacity-100' : 'opacity-0')}
        />
      </div>
    </>
  )
}

export default Checkbox
