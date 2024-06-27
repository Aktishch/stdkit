import { twMerge } from 'tailwind-merge'
import { Icon } from '@ui/Icon'
import { Button, ButtonProps } from '@ui/Button'

interface ButtonSmallProps extends ButtonProps {
  id: string
}

export const ButtonSmall = ({
  className,
  id,
  children,
  ...props
}: ButtonSmallProps) => {
  const style: string = twMerge('justify-start', className)

  return (
    <Button className={style} size="sm" variant={null} {...props}>
      <Icon className="mr-1 text-xl" id={id} />
      <span className="text-sm font-normal leading-none text-black">
        {children}
      </span>
    </Button>
  )
}
