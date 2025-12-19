import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type LogoProps = {
  large?: boolean
  colorful?: boolean
} & HTMLAttributes<HTMLDivElement>

function Logo({ large = false, colorful = true }: LogoProps) {
  return (
    <div className={clsx('font-mono', large ? 'text-7xl' : 'text-2xl', 'leading-[86%] font-medium tracking-tight')}>
      <div>
        oh<span className={clsx(colorful ? 'text-product-foreground' : 'text-neutral-foreground-dim')}>^</span>my
      </div>
      grade
    </div>
  )
}

export default Logo
