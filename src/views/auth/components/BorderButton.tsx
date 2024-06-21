import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'

export const BorderButton = ({
  as: Tag = Link,
  className,
  children,
  ...props
}: ButtonProps) => {
  const style: string = twMerge(
    'font-semibold text-black border-b border-black border-opacity-50 border-dashed text-sm sm:text-base dark:text-white dark:border-white',
    className
  )

  return (
    <Button
      className={style}
      as={Tag}
      color="gray"
      size={null}
      variant={null}
      waved="dark"
      {...props}
    >
      {children}
    </Button>
  )
}
