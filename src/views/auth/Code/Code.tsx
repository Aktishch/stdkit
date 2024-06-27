import { InputDefault } from '@components'
import { BorderButton } from '@views/auth/components/BorderButton'
import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Button, Form, Input } from '@/ui'

export const Code = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>
        На ваш e-mail отправили код подтверждения,{' '}
        <br className="hidden sm:block" /> введите его ниже, чтобы изменить
        пароль
      </Subtitle>
      <Form className="gap-6" action="/password">
        <Input type="hidden" value="Код" name="theme" />
        <InputDefault
          type="text"
          placeholder="Код"
          error="Введите код"
          name="code"
        />
        <Button type="submit">Восстановить</Button>
      </Form>
      <Form className="items-center justify-center mt-8" action="/code">
        <Input type="hidden" value="Получить код повторно" name="theme" />
        <BorderButton as="button" type="submit">
          Не получил код?
        </BorderButton>
      </Form>
    </>
  )
}
