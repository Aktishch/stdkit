import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '@ui/Icon'

interface InputIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  id: string
  right?: boolean
  pointer?: boolean
}

const InputIconComponent = (
  { id, right = false, pointer = false, className }: InputIconProps,
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

export const InputIcon = forwardRef(
  InputIconComponent
) as React.ForwardRefExoticComponent<
  InputIconProps & React.RefAttributes<HTMLDivElement>
>
