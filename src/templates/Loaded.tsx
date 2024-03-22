import React, { forwardRef } from 'react'
import { Preloader } from '../components/Preloader'

export const LoadedComponent = ({}, ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {
  return (
    <div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-white dark:bg-black duration-5"
      ref={ref}
    >
      <Preloader />
    </div>
  )
}

export const Loaded = forwardRef(LoadedComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>
