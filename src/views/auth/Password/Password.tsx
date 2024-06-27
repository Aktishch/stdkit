import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Button, Form, Input } from '@/ui'
import { InputPassword } from '@/components'

export const Password = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>Придумайте новый пароль</Subtitle>
      <Form className="gap-6" action="/">
        <Input type="hidden" value="Новый пароль" name="theme" />
        <InputPassword
          placeholder="Пароль"
          error="Минимальная длинна пароля 8 символов"
          name="password"
        />
        <InputPassword
          placeholder="Повторите пароль"
          error="Минимальная длинна пароля 8 символов"
          name="password-replay"
        />
        <Button type="submit">Восстановить</Button>
      </Form>
    </>
  )
}
