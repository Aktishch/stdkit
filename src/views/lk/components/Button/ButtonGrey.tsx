import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'

interface ButtonGreyProps extends ButtonProps {
  id: string
}

export const ButtonGrey = ({ className, id, ...props }: ButtonGreyProps) => {
  const style: string = twMerge(
    'w-[52px] shrink-0 px-0 dark:bg-dark dark:hover:bg-primary',
    className
  )

  return (
    <Button className={style} color="grey" waved="dark" {...props}>
      <Icon
        className="text-2xl text-black text-opacity-50 dark:text-white"
        id={id}
      />
    </Button>
  )
}
