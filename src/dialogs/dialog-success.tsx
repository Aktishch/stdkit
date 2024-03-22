import React from 'react'
import { Icon } from '../components/Icon'

export const DialogSuccess = (): React.JSX.Element => {
  return (
    <dialog className="px-5 py-10 dialog dialog-xs dark:bg-black dark:text-white rounded-3" id="dialog-success">
      <div className="flex flex-col items-center justify-center">
        <Icon className="mb-5 text-green text-9xl" id="success" />
        <h2 className="font-semibold leading-3 text-center font-alt text-24">Ваша заявка успешно отправлена!</h2>
      </div>
    </dialog>
  )
}
