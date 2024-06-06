import React from 'react'
import { validation } from '@utils/validation'
import { Form } from '@ui/Form'
import { Label } from '@ui/Label'
import { Wrapper } from '@ui/Wrapper'
import { Error } from '@ui/Error'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'
import { Section } from '@views/auth/components/Section'
import { Bg } from '@views/auth/components/Bg'
import { Content } from '@views/auth/components/Content'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Text } from '@views/auth/components/Text'

export const Recovery = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <Section>
      <Bg />
      <Content>
        <Subtitle>Восстановление пароля</Subtitle>
        <Text>
          Введите e-mail и мы вышлем <br /> код для смены пароля
        </Text>
        <Form className="gap-6" action="/code" onSubmit={submitHandler}>
          <Input type="hidden" value="Восстановление пароля" name="theme" />
          <Label data="input">
            <Wrapper>
              <Cover>
                <Input data="email" type="text" name="email" />
              </Cover>
              <Placeholder>E-Mail</Placeholder>
              <Error>Некорректный адрес</Error>
            </Wrapper>
          </Label>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </Form>
      </Content>
    </Section>
  )
}
