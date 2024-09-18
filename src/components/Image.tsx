import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Image = ({
  className,
  src,
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
