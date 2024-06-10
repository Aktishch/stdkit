import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  webp?: string | null
}

export const Picture = ({
  webp = null,
  src,
  className,
  draggable = false,
  loading,
  alt,
}: PictureProps) => {
  const style: string = twMerge(className)

  return (
    <picture>
      {webp !== null ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        className={style}
        loading={loading}
        draggable={draggable}
        src={src}
        alt={alt}
      />
    </picture>
  )
}
