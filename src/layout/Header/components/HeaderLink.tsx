import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import classnames from 'classnames'
import { Waved } from '@components/Waved'

interface HeaderLinkProps extends ButtonProps {
  id: string
}

const HeaderLinkComponent = (
  { className, to, id, children }: HeaderLinkProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'w-10',
    'h-10',
    'font-normal',
    'sm:p-2',
    'opacity-60',
    'dark:opacity-100',
    'dark:hover:bg-primary',
    'rounded-max',
    'sm:rounded-2',
    'bg-grey',
    'dark:bg-primary',
    'dark:sm:bg-opacity-0',
    'sm:bg-opacity-0',
    'hover:bg-grey',
    'sm:w-auto',
    'sm:h-auto',
    'min-w-10',
    'dark:text-white',
    className
  )

  return (
    <Button
      className={classNames}
      as={Link}
      color="black"
      size={null}
      variant={null}
      to={to}
      ref={ref}
    >
      <Waved variant="dark" />
      <Icon className="text-20 sm:text-24" id={id} />
      <span className="hidden ml-2 sm:block">{children}</span>
    </Button>
  )
}

export const HeaderLink = forwardRef(
  HeaderLinkComponent
) as React.ForwardRefExoticComponent<
  HeaderLinkProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>
