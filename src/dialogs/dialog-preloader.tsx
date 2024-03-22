import React from 'react'
import { Preloader } from '../components/Preloader'

export const DialogPreloader = (): React.JSX.Element => {
  return (
    <dialog className="p-0 bg-transparent dialog dialog-xs" id="dialog-preloader">
      <div className="flex items-center justify-center">
        <Preloader />
      </div>
    </dialog>
  )
}
