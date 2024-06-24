import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'

export const BurgerButton = ({ className, ...props }: ButtonProps) => {
  const style: string = twMerge('rounded', className)

  return (
    <Button
      className={style}
      color="gray"
      variant={null}
      size={null}
      waved="dark"
      {...props}
    >
      <Icon
        className="text-2xl text-black text-opacity-60 dark:text-white"
        id="burger"
      />
    </Button>
  )
}
