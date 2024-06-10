import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface HeaderButtonProps extends ButtonProps {
  id: string
}

export const HeaderButton = ({
  as: Tag = 'button',
  color = 'primary',
  className,
  type,
  to,
  id,
  onClick,
  children,
}: HeaderButtonProps) => {
  const style: string = twMerge('justify-start', 'px-2', className)

  return (
    <Button
      className={style}
      color={color}
      as={Tag}
      size="sm"
      variant={null}
      type={type}
      to={to}
      onClick={onClick}
    >
      <Waved variant="dark" />
      <Icon className="text-xl" id={id} />
      <span className="ml-1 text-base font-normal text-black dark:text-white">
        {children}
      </span>
    </Button>
  )
}
