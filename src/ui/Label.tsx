import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  data?: string | null
}

const LabelComponent = (
  { className, data = null, children }: LabelProps,
  ref: React.ForwardedRef<HTMLLabelElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-label', className)

  return (
    <label className={classNames} data-label={data} ref={ref}>
      {children}
    </label>
  )
}

export const Label = forwardRef(
  LabelComponent
) as React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<HTMLLabelElement>
>
