import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '@ui/Icon'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  data?: string | null
}

interface FormIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  id: string
  right?: boolean
  pointer?: boolean
}

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

const FormLabelComponent = (
  { className, data = null, children }: FormLabelProps,
  ref: React.ForwardedRef<HTMLLabelElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-label', className)

  return (
    <label className={classNames} data-label={data} ref={ref}>
      {children}
    </label>
  )
}

const FormWrapperComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-wrapper', className)

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  )
}

const FormIconComponent = (
  { id, right = false, pointer = false, className }: FormIconProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'form-icon',
    right ? 'form-icon-right' : 'form-icon-left',
    pointer ? 'form-icon-pointer' : null,
    className
  )

  return (
    <div className={classNames} ref={ref}>
      <Icon id={id} />
    </div>
  )
}

const FormErrorComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLSpanElement>,
  ref: React.ForwardedRef<HTMLSpanElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-error', className)

  return (
    <span className={classNames} data-error ref={ref}>
      {children}
    </span>
  )
}

export const Form = forwardRef(
  FormComponent
) as React.ForwardRefExoticComponent<
  React.FormHTMLAttributes<HTMLFormElement> &
    React.RefAttributes<HTMLFormElement>
>

export const FormLabel = forwardRef(
  FormLabelComponent
) as React.ForwardRefExoticComponent<
  FormLabelProps & React.RefAttributes<HTMLLabelElement>
>

export const FormWrapper = forwardRef(
  FormWrapperComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>

export const FormIcon = forwardRef(
  FormIconComponent
) as React.ForwardRefExoticComponent<
  FormIconProps & React.RefAttributes<HTMLDivElement>
>

export const FormError = forwardRef(
  FormErrorComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
>
