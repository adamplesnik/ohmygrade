import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type ButtonProps = {
  value: string
  active?: boolean
} & HTMLAttributes<HTMLDivElement>

const Button = ({ value, active, onClick }: ButtonProps) => {
  return (
    <div
      className={clsx(
        'active:bg-neutral-container-bright hover:bg-neutral-container flex h-10 cursor-pointer items-center rounded-full border border-transparent px-4 font-semibold transition-colors',
        active ? 'bg-neutral-foreground text-neutral-on-foreground' : ''
      )}
    >
      {value}
    </div>
  )
}

export default Button
