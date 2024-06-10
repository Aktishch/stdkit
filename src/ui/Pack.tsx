import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

const packSizes = {
  half: 'pack-half',
  sm: 'pack-rect-sm',
  md: 'pack-rect-md',
  lg: 'pack-rect-lg',
  box: 'pack-box',
  sheet: 'pack-sheet',
}

interface PackProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: ElementType
  size: keyof typeof packSizes | null
  href?: string | null
  target?: boolean
}

export const Pack = ({
  as: Tag = 'div',
  size = 'box',
  className,
  href,
  target = false,
  children,
  ...props
}: PackProps) => {
  const style: string = twMerge(
    'pack',
    size ? packSizes[size] : null,
    className
  )

  return (
    <Tag
      className={style}
      href={href}
      target={target ? '_blank' : null}
      {...props}
    >
      {children}
    </Tag>
  )
}
