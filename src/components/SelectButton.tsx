import { MenuItem } from '@components'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  value?: string
}

export const SelectButton = ({ className, title, value, ...props }: SelectButtonProps) => {
  const style: string = twMerge(
    'justify-start px-4 text-sm text-black/60 dark:text-white btn btn-gray dark:btn-primary btn-sm',
    title === value ? 'btn-fade pointer-events-none' : null,
    className
  )

  return (
    <MenuItem className={style} as="button" type="button" {...props}>
      {title}
    </MenuItem>
  )
}
