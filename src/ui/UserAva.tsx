import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Pack } from '@ui/Pack'
import { Loader } from '@ui/Loader'
import { Picture } from '@ui/Picture'

interface AvaProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  webp?: string
  src?: string
}

const UserAvaComponent = (
  {
    className,
    webp = '/img/pictures/user.webp',
    src = '/img/pictures/user.jpg',
  }: AvaProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'flex',
    'items-center',
    'justify-center',
    'w-10',
    'min-w-10',
    'rounded-max',
    'bg-gray',
    className
  )

  return (
    <Pack className={classNames} size="box" ref={ref}>
      <Loader />
      <Picture className="image" webp={webp} src={src} loading="lazy" />
    </Pack>
  )
}

export const UserAva = forwardRef(
  UserAvaComponent
) as React.ForwardRefExoticComponent<
  AvaProps & React.RefAttributes<HTMLDivElement>
>
