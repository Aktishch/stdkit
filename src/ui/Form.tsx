import React, { forwardRef } from 'react'
import classnames from 'classnames'

const FormComponent = (
  {
    className,
    action = undefined,
    onSubmit = undefined,
    children,
  }: React.FormHTMLAttributes<HTMLFormElement>,
  ref: React.ForwardedRef<HTMLFormElement>
): React.JSX.Element => {
  const classNames: string = classnames('form', className)

  return (
    <form className={classNames} action={action} onSubmit={onSubmit} ref={ref}>
      {children}
    </form>
  )
}

export const Form = forwardRef(
  FormComponent
) as React.ForwardRefExoticComponent<
  React.FormHTMLAttributes<HTMLFormElement> &
    React.RefAttributes<HTMLFormElement>
>
