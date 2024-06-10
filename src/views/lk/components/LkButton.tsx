import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface LkButtonProps extends ButtonProps {
  id: string
  exit?: boolean
}

const LkButtonComponent = (
  {
    as: Tag = Link,
    className,
    type,
    to,
    id,
    exit = false,
    children,
  }: LkButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
): React.JSX.Element => {
  const classNames: string = twMerge(
    'justify-start',
    'px-4',
    'font-normal',
    exit ? 'text-red' : 'text-black',
    exit ? '' : 'dark:text-white',
    className
  )

  return (
    <Button
      className={classNames}
      color="gray"
      variant={null}
      as={Tag}
      type={type}
      to={to}
      ref={ref}
    >
      <Waved variant="dark" />
      <Icon
        className={`mr-4 ${exit ? 'text-red' : 'text-primary'} text-2xl`}
        id={id}
      />
      {children}
    </Button>
  )
}

export const LkButton = forwardRef(
  LkButtonComponent
) as React.ForwardRefExoticComponent<
  LkButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>
