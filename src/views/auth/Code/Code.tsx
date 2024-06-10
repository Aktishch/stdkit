import { Form } from '@ui/Form'
import { Error } from '@ui/Error'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLink } from '@views/auth/components/AuthLink'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Code = () => {
  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>
          На ваш e-mail отправили код подтверждения,{' '}
          <br className="hidden sm:block" /> введите его ниже, чтобы изменить
          пароль
        </AuthSubtitle>
        <Form className="gap-6" action="/password">
          <Input type="hidden" value="Код" name="theme" />
          <InputDefault type="email" placeholder="E-Mail" name="email">
            <Error>Введите Код</Error>
          </InputDefault>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </Form>
        <Form className="items-center justify-center mt-8" action="/code">
          <Input type="hidden" value="Получить код повторно" name="theme" />
          <AuthLink as="button" type="submit">
            Не получил код?
          </AuthLink>
        </Form>
      </AuthContent>
    </AuthSection>
  )
}
