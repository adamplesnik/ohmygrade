import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type ButtonProps = {
  active?: boolean
} & HTMLAttributes<HTMLDivElement>

const Button = ({ children, active, onClick }: ButtonProps) => {
  return (
    <div
      className={clsx(
        'active:bg-neutral-container-bright hover:bg-neutral-container flex h-10 cursor-pointer items-center rounded-full border border-transparent px-4 font-semibold transition-colors',
        active ? 'bg-neutral-main text-neutral-on-main' : ''
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button
