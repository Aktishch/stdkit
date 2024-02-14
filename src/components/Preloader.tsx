import React, { forwardRef } from 'react'

export const PreloaderComponent = ({}, ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-white dark:bg-black duration-5"
      ref={ref}
    >
      <div className="preloader preloader--circles">
        <div className="preloader-circle" />
      </div>
    </div>
  )
}

export const Preloader = forwardRef(PreloaderComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLElement>
>
