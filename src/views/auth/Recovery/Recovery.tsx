import { InputDefault } from '@components'
import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Input, Button, Form } from '@/ui'

export const Recovery = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>
        Введите e-mail и мы вышлем <br /> код для смены пароля
      </Subtitle>
      <Form className="gap-6" action="/code">
        <Input type="hidden" value="Восстановление пароля" name="theme" />
        <InputDefault
          type="email"
          placeholder="E-Mail"
          error="Некорректный адрес"
          name="email"
        />
        <Button type="submit">Восстановить</Button>
      </Form>
    </>
  )
}
