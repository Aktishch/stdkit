import { SectionScreen } from '@ui/SectionScreen'
import { GradientBg } from '@ui/GradientBg'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Recovery = () => {
  return (
    <SectionScreen>
      <GradientBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>
          Введите e-mail и мы вышлем <br /> код для смены пароля
        </AuthSubtitle>
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
      </AuthContent>
    </SectionScreen>
  )
}
