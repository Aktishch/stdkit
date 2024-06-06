import React from 'react'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Eye } from '@components/Eye'
import { Waved } from '@components/Waved'
import { Section } from '@views/auth/components/Section'
import { Bg } from '@views/auth/components/Bg'
import { Content } from '@views/auth/components/Content'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Text } from '@views/auth/components/Text'

export const Password = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <Section>
      <Bg />
      <Content>
        <Subtitle>Восстановление пароля</Subtitle>
        <Text>Придумайте новый пароль</Text>
        <Form className="gap-6" action="/" onSubmit={submitHandler}>
          <Input type="hidden" value="Новый пароль" name="theme" />
          <FormLabel data="input">
            <FormWrapper>
              <Cover>
                <Input data="password" type="password" name="password" />
              </Cover>
              <Placeholder>Пароль</Placeholder>
              <FormError>Минимальная длинна пароля 8 символов</FormError>
              <Eye />
            </FormWrapper>
          </FormLabel>
          <FormLabel data="input">
            <FormWrapper>
              <Cover>
                <Input data="password" type="password" name="passwod-replay" />
              </Cover>
              <Placeholder>Повторите пароль</Placeholder>
              <FormError>Минимальная длинна пароля 8 символов</FormError>
              <Eye />
            </FormWrapper>
          </FormLabel>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </Form>
      </Content>
    </Section>
  )
}
