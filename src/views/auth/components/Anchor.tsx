import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { Button, ButtonProps } from '@ui/Button'
import { Waved } from '@components/Waved'

const AnchorComponent = (
  { as: Tag = Link, children, to }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-semibold',
    'text-black',
    'border-b',
    'border-black',
    'border-opacity-50',
    'border-dashed',
    'text-14',
    'sm:text-16',
    'dark:text-white',
    'dark:border-white'
  )

  return (
    <Button
      className={classNames}
      as={Tag}
      color="gray"
      size={null}
      variant={null}
      to={to}
      ref={ref}
    >
      <Waved variant="dark" />
      {children}
    </Button>
  )
}

export const Anchor = forwardRef(
  AnchorComponent
) as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>
