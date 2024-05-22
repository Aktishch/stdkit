import React, { createContext } from 'react'
import classnames from 'classnames'
import { validation } from '../functions/validation'
// import { fancyboxOpen, fancyboxNotClosing, fancyboxClose } from '../components/Fancybox'

interface HandlerProps extends React.PropsWithChildren {
  value: string
  className?: string
  action?: string | null
}

const submitHandler = (event: Event, value: string): void => {
  const form = event.target as HTMLFormElement

  switch (value) {
  case 'action': {
    if (!validation(form)) event.preventDefault()
    break
  }

    // default: {
    //   event.preventDefault()

    //   const formData: FormData = new FormData(form)
    //   const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    //   let requestUrl = ''

    //   switch (value) {
    //   case 'submit': {
    //     requestUrl = './ajax/submit-handler.php'
    //     submitBtn.setAttribute('disabled', 'disabled')
    //     fancyboxNotClosing('#dialog-preloader')

    //     fetch(requestUrl, {
    //       method: 'POST',
    //       body: formData,
    //     })
    //       .then((response: Response): Promise<any> => {
    //         return response.json()
    //       })
    //       .then((response: Response): void => {
    //         fancyboxClose()

    //         switch (response.status) {
    //         case true: {
    //           fancyboxOpen('#dialog-success')
    //           break
    //         }

    //         case false: {
    //           fancyboxOpen('#dialog-error')
    //           break
    //         }
    //         }

    //         form.reset()
    //         submitBtn.removeAttribute('disabled')
    //       })
    //       .catch((error: string): void => console.log('The form has not been sent', error))
    //     break
    //   }
    //   }

    //   break
    // }
  }
}

export const HandlerContext = createContext<string>('')

export const Handler = ({ value, className, action = null, children }: HandlerProps): React.JSX.Element => {
  const classNames: string = classnames('form', className)

  return (
    <HandlerContext.Provider value={value}>
      <form
        className={classNames}
        acton={action}
        onSubmit={(event: Event): void => {
          submitHandler(event, value)
        }}
      >
        {children}
      </form>
    </HandlerContext.Provider>
  )
}
