import { Icon } from '@components'
import { DialogBackdrop, DialogPanel, Dialog as Wrapper } from '@headlessui/react'
import { DialogProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Dialog = ({ className, open, onClose, children }: DialogProps): TSXComponent => {
  const style: string = twMerge(
    'relative w-full bg-white transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:translate-y-5 data-[closed]:opacity-0',
    className
  )

  return (
    <Wrapper className="relative z-50" open={open} onClose={(): void => onClose(false)}>
      <DialogBackdrop
        className="fixed inset-0 transition duration-300 bg-black/50 data-[closed]:opacity-0"
        transition
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center w-full min-h-full p-4">
          <button className="fixed z-10 text-black rounded-full top-4 right-4 btn btn-white btn-fill size-10">
            <Icon id="close" />
          </button>
          <DialogPanel className={style} transition>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Wrapper>
  )
}
