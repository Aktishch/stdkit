import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'

export const SidebarRemove = ({ className, ...props }: ButtonProps) => {
  const style: string = twMerge(
    'justify-start px-4 font-normal text-red mt-4',
    className
  )

  return (
    <Button
      className={style}
      color="red"
      variant={null}
      type="submit"
      waved="dark"
      {...props}
    >
      <Icon className="mr-4 text-2xl" id="trash" />
      Удалить
    </Button>
  )
}
