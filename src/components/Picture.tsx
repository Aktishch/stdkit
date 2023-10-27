import React from 'react'
import classnames from 'classnames'

interface PictureProps {
  webp?: string
  src: string
  className?: string
  loading?: string
  alt?: string
}

const pictureLoading = {
  auto: 'auto',
  eager: 'eager',
  lazy: 'lazy',
}

export const Picture = ({ webp, src, className, loading = 'auto', alt }: PictureProps): React.JSX.Element => {
  const classNames: string = classnames(className)

  return (
    <picture>
      {webp !== null ? <source srcSet={webp} type="image/webp" /> : null}
      <img className={classNames} loading={pictureLoading[loading]} src={src} alt={alt} />
    </picture>
  )
}
