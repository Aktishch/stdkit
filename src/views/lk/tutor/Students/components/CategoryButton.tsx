import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'

export const CategoryButton = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  const style: string = twMerge(
    'px-1 text-black dark:text-white text-opacity-70 active:transform-none dark:text-opacity-70 after:content-auto after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-px after:bg-primary dark:after:bg-white after:invisible after:opacity-0 after:duration-200',
    className
  )

  return (
    <Button
      className={style}
      color="grey"
      variant={null}
      waved="dark"
      {...props}
    >
      {children}
    </Button>
  )
}
