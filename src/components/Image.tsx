import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Image = ({
  src,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const style: string = twMerge(className)

  return (
    <img
      className={style}
      draggable={false}
      src={src}
      loading="lazy"
      {...props}
    />
  )
}
