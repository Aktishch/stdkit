import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  webp?: string | null
}

const PictureComponent = (
  {
    webp = null,
    src,
    className,
    draggable = false,
    loading,
    alt,
  }: PictureProps,
  ref: React.ForwardedRef<HTMLImageElement>
): React.JSX.Element => {
  const classNames: string = classnames(className)

  return (
    <picture>
      {webp !== null ? <source srcSet={webp} type="image/webp" /> : null}
      <img
        className={classNames}
        loading={loading}
        draggable={draggable}
        src={src}
        alt={alt}
        ref={ref}
      />
    </picture>
  )
}

export const Picture = forwardRef(
  PictureComponent
) as React.ForwardRefExoticComponent<
  PictureProps & React.RefAttributes<HTMLImageElement>
>
