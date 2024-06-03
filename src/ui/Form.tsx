import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '@ui/Icon'

interface FormLabelProps extends React.HtmlHTMLAttributes<HTMLLabelElement> {
  data?: string | null
}

interface FormWrapperProps extends React.DOMAttributes<HTMLDivElement> {
  className?: string
}

interface FormIconProps extends React.DOMAttributes<HTMLDivElement> {
  id: string
  right?: boolean
  pointer?: boolean
  className?: string
}

interface FormErrorProps extends React.PropsWithChildren {
  className?: string
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
  { className, children }: FormWrapperProps,
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
  { className, children }: FormErrorProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-error', className)

  return (
    <span className={classNames} data-error ref={ref}>
      {children}
    </span>
  )
}

export const FormLabel = forwardRef(
  FormLabelComponent
) as React.ForwardRefExoticComponent<
  FormLabelProps & React.RefAttributes<HTMLLabelElement>
>

export const FormWrapper = forwardRef(
  FormWrapperComponent
) as React.ForwardRefExoticComponent<
  FormWrapperProps & React.RefAttributes<HTMLDivElement>
>

export const FormIcon = forwardRef(
  FormIconComponent
) as React.ForwardRefExoticComponent<
  FormIconProps & React.RefAttributes<HTMLDivElement>
>

export const FormError = forwardRef(
  FormErrorComponent
) as React.ForwardRefExoticComponent<
  FormErrorProps & React.RefAttributes<HTMLSpanElement>
>
