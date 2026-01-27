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
          'bg-neutral-background/80 border-neutral-outline fixed top-4 right-4 bottom-4 z-50 flex w-full max-w-80 flex-col overflow-y-auto rounded-2xl shadow-lg backdrop-blur-xs transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-[120%]'
        )}
      >
        <div className="from-neutral-background to-neutral-background/0 sticky top-0 flex w-full items-center bg-linear-to-b from-20% p-6">
          <H className="flex-1">{title}</H>
          <Button onClick={onClick}>
            <X size={LUCIDE_SIZE} strokeWidth={LUCIDE_STROKE} />
          </Button>
        </div>
        <div className="p-6 pt-2">{children}</div>
      </div>
    </>
  )
}

export default Popup
