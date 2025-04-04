import { MenuItems as Items, Transition } from '@headlessui/react'
import { Props, TSXComponent } from '@utils'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

export const MenuItems = ({ className, children }: Props): TSXComponent => {
  const style: string = twMerge('focus-visible:outline-0', className)

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Items className={style} as="div">
        {children}
      </Items>
    </Transition>
  )
}
