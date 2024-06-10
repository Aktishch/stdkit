import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputPassword } from '@components/InputPassword'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Password = () => {
  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>Придумайте новый пароль</AuthSubtitle>
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
      </AuthContent>
    </AuthSection>
  )
}
