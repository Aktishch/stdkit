import React from 'react'
import {
  Dialog as Wrapper,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon } from '@components'

export interface DialogProps extends Props {
  open: boolean
  onClose: (value: React.SetStateAction<boolean>) => void
}

export const Dialog = ({ className, open, onClose, children }: DialogProps) => {
  const style: string = twMerge(
    'relative w-full bg-white duration-300 ease-out data-[closed]:scale-95 data-[closed]:translate-y-5 data-[closed]:opacity-0',
    className
  )

  return (
    <Wrapper
      className="relative z-50"
      open={open}
      onClose={(): void => onClose(false)}
    >
      <DialogBackdrop
        className="fixed inset-0 duration-300 bg-black/50 data-[closed]:opacity-0"
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
