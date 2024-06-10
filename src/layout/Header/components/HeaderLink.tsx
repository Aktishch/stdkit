import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface HeaderLinkProps extends ButtonProps {
  id: string
}

export const HeaderLink = ({
  className,
  to,
  id,
  onClick,
  children,
}: HeaderLinkProps) => {
  const style: string = twMerge(
    'w-10 h-10 font-normal sm:p-2 opacity-60 dark:opacity-100 dark:hover:bg-primary rounded-full sm:rounded-lg bg-grey dark:bg-primary dark:sm:bg-opacity-0 sm:bg-opacity-0 hover:bg-grey sm:w-auto sm:h-auto min-w-10 dark:text-white',
    className
  )

  return (
    <Button
      className={style}
      as={Link}
      color="black"
      size={null}
      variant={null}
      to={to}
      onClick={onClick}
    >
      <Waved variant="dark" />
      <Icon className="text-xl sm:text-2xl" id={id} />
      <span className="hidden ml-2 sm:block">{children}</span>
    </Button>
  )
}
