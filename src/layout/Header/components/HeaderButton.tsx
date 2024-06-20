import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'

interface HeaderButtonProps extends ButtonProps {
  id: string
}

export const HeaderButton = ({
  className,
  id,
  children,
  ...props
}: HeaderButtonProps) => {
  const style: string = twMerge('justify-start px-2', className)

  return (
    <Button className={style} size="sm" variant={null} waved="dark" {...props}>
      <Icon className="text-xl" id={id} />
      <span className="ml-1 text-base font-normal text-black dark:text-white">
        {children}
      </span>
    </Button>
  )
}
