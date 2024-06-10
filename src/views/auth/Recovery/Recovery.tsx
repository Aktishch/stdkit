import { Form } from '@ui/Form'
import { Error } from '@ui/Error'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Recovery = () => {
  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>
          Введите e-mail и мы вышлем <br /> код для смены пароля
        </AuthSubtitle>
        <Form className="gap-6" action="/code">
          <Input type="hidden" value="Восстановление пароля" name="theme" />
          <InputDefault type="email" placeholder="E-Mail" name="login">
            <Error>Некорректный адрес</Error>
          </InputDefault>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </Form>
      </AuthContent>
    </AuthSection>
  )
}
