import { SectionScreen } from '@ui/SectionScreen'
import { Gradient } from '@ui/Gradient'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
import { Content } from '@views/auth/components/Content'
import { Title } from '@views/auth/components/Title'
import { Subtitle } from '@views/auth/components/Subtitle'

export const Recovery = () => {
  return (
    <SectionScreen>
      <Gradient />
      <Content>
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
      </Content>
    </SectionScreen>
  )
}
