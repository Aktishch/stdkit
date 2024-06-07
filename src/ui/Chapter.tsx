import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Picture } from '@ui/Picture'

interface ChapterProps extends React.HtmlHTMLAttributes<HTMLElement> {
  src: string
}

export const Chapter = ({ className, children, src }: ChapterProps) => {
  const style: string = twMerge('flex items-center justify-between', className)

  return (
    <div className={style}>
      <h3 className="mr-2 text-lg font-semibold leading-5 sm:text-xl">
        {children}
      </h3>
      <Picture className="text-xl icon" src={src} />
    </div>
  )
}
