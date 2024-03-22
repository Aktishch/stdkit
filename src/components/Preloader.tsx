import React, { forwardRef } from 'react'

export const PreloaderComponent = ({}, ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
  return (
    <div className="preloader preloader--circles" ref={ref}>
      <div className="preloader-circle" />
    </div>
  )
}

export const Preloader = forwardRef(PreloaderComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLElement>
>
