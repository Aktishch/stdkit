import { Fragment } from 'react'
import { MenuItems as Items, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const MenuItems = ({ className, children }: Props) => {
  const style: string = twMerge(className)

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
