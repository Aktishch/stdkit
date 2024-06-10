import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
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
          <AuthLink as="button" type="submit">
            Не получил код?
          </AuthLink>
        </Form>
      </AuthContent>
    </AuthSection>
  )
}
