import React from 'react'
import classnames from 'classnames'

interface pictureProps {
  webp?: boolean
  src: string
  format?: string
  className?: string | null
  loading?: string
  alt?: string
}

const pictureFormats = {
  jpg: 'jpg',
  jpeg: 'jpeg',
  png: 'png',
  svg: 'svg',
  gif: 'gif',
}

const pictureLoading = {
  auto: 'auto',
  eager: 'eager',
  lazy: 'lazy',
}

export const Picture = ({ webp = false, src, format, className = null, loading = 'auto', alt = '' }: pictureProps) => {
  const classNames: string = classnames(className)

  return (
    <picture>
      {webp ? <source srcSet={`${src}.webp`} type="image/webp" /> : null}
      <img
        className={classNames}
        loading={pictureLoading[loading]}
        src={src + (format ? `.${pictureFormats[format]}` : '')}
        alt={alt}
      />
    </picture>
  )
}
