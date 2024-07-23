import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface PictureProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  webp?: string | null
}

export const Picture = ({
  webp = null,
  src,
  className,
  draggable = false,
  ...props
}: PictureProps) => {
  const style: string = twMerge(className)

  return (
    <picture>
      {webp !== null ? <source srcSet={webp} type="image/webp" /> : null}
      <img className={style} draggable={draggable} src={src} {...props} />
    </picture>
  )
}
