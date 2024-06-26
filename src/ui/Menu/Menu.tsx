import React from 'react'
import { Menu as MenuWrap } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export { MenuButton, MenuItem } from '@headlessui/react'

export function Menu({ children, className }: IMenuProps) {
  return (
    <MenuWrap as="div" className={twMerge('relative', className)}>
      {children}
    </MenuWrap>
  )
}

interface IMenuProps extends React.PropsWithChildren {
  className?: string
}
