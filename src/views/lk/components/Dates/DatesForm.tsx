import { twMerge } from 'tailwind-merge'
import { Form } from '@ui/Form/Form'

export const DatesForm = ({
  className,
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  const style: string = twMerge(
    'gap-4 px-4 text-white py-7 sm:gap-6 sm:px-8 sm:py-10 bg-dark rounded-3xl',
    className
  )

  return (
    <Form className={style} {...props}>
      {children}
    </Form>
  )
}
