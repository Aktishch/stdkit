import { Screen } from '@ui/Screen'
import { Gradient } from '@ui/Gradient'
import { Button } from '@ui/Button'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'
import { InputDefault } from '@components/Input/InputDefault'
import { Content } from '@views/auth/components/Content'
import { BorderButton } from '@views/auth/components/BorderButton'
import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'

export const Code = () => {
  return (
    <Screen>
      <Gradient />
      <Content>
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
      </Content>
    </Screen>
  )
}
