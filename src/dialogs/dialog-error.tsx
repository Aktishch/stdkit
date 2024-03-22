import React from 'react'
import { Icon } from '../components/Icon'

export const DialogError = (): React.JSX.Element => {
  return (
    <dialog className="px-5 py-10 dialog dialog-xs dark:bg-black dark:text-white rounded-3" id="dialog-error">
      <div className="flex flex-col items-center justify-center">
        <Icon className="mb-5 text-red text-9xl" id="close" />
        <h2 className="font-semibold leading-3 text-center font-alt text-24">Ошибка!</h2>
      </div>
    </dialog>
  )
}
