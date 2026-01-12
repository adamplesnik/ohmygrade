import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type HeadingType = HTMLAttributes<HTMLDivElement>

const H = ({ children, className }: HeadingType) => {
  return <h2 className={clsx('text-3xl leading-none font-semibold', className)}>{children}</h2>
}

export default H
