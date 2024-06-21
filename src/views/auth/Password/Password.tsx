import { SectionScreen } from '@ui/SectionScreen'
import { Gradient } from '@ui/Gradient'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputPassword } from '@components/InputPassword'
import { Content } from '@views/auth/components/Content'
import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'

export const Password = () => {
  return (
    <SectionScreen>
      <Gradient />
      <Content>
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
      </Content>
    </SectionScreen>
  )
}
