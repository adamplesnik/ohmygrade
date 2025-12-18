import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type LogoProps = {
  large?: boolean
  colorful?: boolean
} & HTMLAttributes<HTMLDivElement>

function Logo({ large = false, colorful = true }: LogoProps) {
  return (
    <div className={clsx(large ? 'text-7xl' : 'text-3xl', 'leading-[80%] font-medium')}>
      <div>
        ohmy<span className={clsx(colorful ? 'text-product-foreground' : 'text-neutral-on-foreground')}>*</span>
      </div>
      grade
    </div>
  )
}

export default Logo
