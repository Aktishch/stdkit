import React, { createContext } from 'react'
import classnames from 'classnames'

interface HandlerProps extends React.PropsWithChildren {
  value: string
  className?: string
}

const submitHandler = (event: Event, value: string): void => {
  const form = event.target as HTMLFormElement

  switch (value) {
  case 'action': {
    event.preventDefault()
    console.log(value)
    break
  }

  default: {
    event.preventDefault()
    console.log(value)
    break
  }
  }
}

export const HandlerContext = createContext<string>('')

export const Handler = ({ value, className, children }: HandlerProps): React.JSX.Element => {
  const classNames: string = classnames('form', className)

  return (
    <HandlerContext.Provider value={value}>
      <form
        className={classNames}
        onSubmit={(event: Event): void => {
          submitHandler(event, value)
        }}
      >
        {children}
      </form>
    </HandlerContext.Provider>
  )
}
