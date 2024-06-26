import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'

export const SidebarExit = ({ className, ...props }: ButtonProps) => {
  const style: string = twMerge(
    'justify-start px-4 font-normal text-red',
    className
  )

  return (
    <Form className="mt-4" action="/">
      <Input type="hidden" value="Выход" name="theme" />
      <Button
        className={style}
        color="red"
        variant={null}
        type="submit"
        waved="dark"
        {...props}
      >
        <Icon className="mr-4 text-2xl" id="arrow-back" />
        Выйти
      </Button>
    </Form>
  )
}