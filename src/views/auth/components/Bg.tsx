import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Pack } from '@ui/Pack'
import { Loader } from '@ui/Loader'
import { Picture } from '@ui/Picture'

const BgComponent = (
  {},
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames('absolute', 'inset-0', 'dark:hidden')

  return (
    <div className={classNames} ref={ref}>
      <Pack className="h-full bg-gray" size={null}>
        <Loader />
        <Picture
          className="image"
          webp="img/pictures/authorization-bg.webp"
          src="img/pictures/authorization-bg.jpg"
          loading="lazy"
        />
      </Pack>
    </div>
  )
}

export const Bg = forwardRef(BgComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>
