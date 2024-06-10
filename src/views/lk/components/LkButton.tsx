import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface LkButtonProps extends ButtonProps {
  id: string
  exit?: boolean
}

export const LkButton = ({
  as: Tag = Link,
  className,
  type,
  to,
  id,
  exit = false,
  children,
}: LkButtonProps) => {
  const style: string = twMerge(
    'justify-start px-4 font-normal',
    exit ? 'text-red' : 'text-black',
    exit ? '' : 'dark:text-white',
    className
  )

  return (
    <Button
      className={style}
      color="gray"
      variant={null}
      as={Tag}
      type={type}
      to={to}
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
