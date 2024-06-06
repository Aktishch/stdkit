import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface HeaderButtonProps extends ButtonProps {
  id: string
}

const HeaderButtonComponent = (
  {
    as: Tag = 'button',
    color = 'primary',
    className,
    type,
    to,
    id,
    onClick = undefined,
    children,
  }: HeaderButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
): React.JSX.Element => {
  const classNames: string = classnames('justify-start', 'px-2', className)

  return (
    <Button
      className={classNames}
      color={color}
      as={Tag}
      size="sm"
      variant={null}
      type={type}
      to={to}
      ref={ref}
      onClick={onClick}
    >
      <Waved variant="dark" />
      <Icon className="text-20" id={id} />
      <span className="ml-1 font-normal text-black dark:text-white text-16">
        {children}
      </span>
    </Button>
  )
}

export const HeaderButton = forwardRef(
  HeaderButtonComponent
) as React.ForwardRefExoticComponent<
  HeaderButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>
