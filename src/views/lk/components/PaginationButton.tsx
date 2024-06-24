import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'

export const PaginationButton = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  const style: string = twMerge(
    'size-8 sm:size-11 rounded-lg text-sm sm:text-base shrink-0',
    className
  )

  return (
    <Button className={style} size={null} {...props}>
      {children}
    </Button>
  )
}
