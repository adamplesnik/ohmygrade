import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type ButtonProps = {
  value: string
  big?: boolean
} & HTMLAttributes<HTMLDivElement>

function Button({ value, big }: ButtonProps) {
  return (
    <div
      className={clsx(
        'hover:border-neutral-foreground flex cursor-pointer items-center border border-transparent font-semibold transition-colors',
        big ? 'h-12 px-4' : 'h-8 px-2'
      )}
    >
      {value}
    </div>
  )
}

export default Button
