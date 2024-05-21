import React, { forwardRef } from 'react'
import { Icon } from './Icon'

const LoaderComponent = ({}, ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
  return (
    <div className="loader" ref={ref}>
      <span className="loader-progress">
        <Icon id="loader" className="loader-icon" />
      </span>
    </div>
  )
}

export const Loader = forwardRef(LoaderComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>
