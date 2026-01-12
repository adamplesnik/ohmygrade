import clsx from 'clsx'
import { X } from 'lucide-react'
import { HTMLAttributes } from 'react'
import { LUCIDE_SIZE, LUCIDE_STROKE } from '../helpers/constants'
import Button from './Button'
import H from './Heading'

type PopupProps = { isOpen: boolean; title?: string | undefined } & HTMLAttributes<HTMLDivElement>

const Popup = ({ isOpen = false, title, children, onClick }: PopupProps) => {
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black transition-opacity',
          isOpen ? 'opacity-20' : 'pointer-events-none opacity-0'
        )}
        onClick={onClick}
      ></div>

      <div
        className={clsx(
          'bg-neutral-background fixed top-0 right-0 bottom-0 z-50 w-full max-w-80 p-6 transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="mb-8 flex w-full items-center">
          <H className="flex-1">{title}</H>
          <Button onClick={onClick}>
            <X size={LUCIDE_SIZE} strokeWidth={LUCIDE_STROKE} />
          </Button>
        </div>
        {children}
      </div>
    </>
  )
}

export default Popup
