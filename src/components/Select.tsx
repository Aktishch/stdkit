import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Menu, MenuButton, MenuItems, Icon } from '@components'

const SelectComponent = (
  {
    className,
    children,
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const style: string = twMerge('pr-12', className)

  return (
    <Menu className="relative">
      <MenuButton className="relative w-full">
        {({ active }) => (
          <>
            <input className={style} type="text" {...props} ref={ref} />
            <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none">
              <Icon
                className={`text-base opacity-50 ease-linear transition-transform ${active ? '-rotate-90' : null}`}
                id="arrow-right"
              />
            </span>
          </>
        )}
      </MenuButton>
      <MenuItems className="absolute left-0 right-0 z-10 flex flex-col p-2 bg-white border border-solid border-gray top-full dark:bg-dark rounded-2xl">
        {children}
      </MenuItems>
    </Menu>
  )
}

export const Select = forwardRef(SelectComponent)
