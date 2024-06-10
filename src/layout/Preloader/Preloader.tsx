import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Preloader = ({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const style: string = twMerge(
    'fixed inset-0 z-50 flex flex-col items-center justify-center duration-500 bg-white',
    className
  )

  return (
    <div className={style}>
      <div className="preloader">
        <div className="preloader-square" />
        <div className="preloader-square" />
        <div className="preloader-square" />
        <div className="preloader-square" />
      </div>
    </div>
  )
}
