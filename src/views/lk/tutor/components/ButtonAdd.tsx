import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'

export const ButtonAdd = ({ className, children }: ButtonProps) => {
  const style: string = twMerge('px-0', className)

  return (
    <Button className={style} variant={null} waved="dark">
      <Icon className="mr-2 text-2xl" id="plus" />
      {children}
    </Button>
  )
}
