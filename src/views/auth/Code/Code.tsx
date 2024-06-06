import React from 'react'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'
import { Section } from '@views/auth/components/Section'
import { Bg } from '@views/auth/components/Bg'
import { Content } from '@views/auth/components/Content'
import { Anchor } from '@views/auth/components/Anchor'
import { Subtitle } from '@views/auth/components/Subtitle'
import { Text } from '@views/auth/components/Text'

export const Code = (): React.JSX.Element => {
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
          На ваш e-mail отправили код подтверждения,{' '}
          <br className="hidden sm:block" /> введите его нижу, чтобы изменить
          пароль
        </Text>
        <Form className="gap-6" action="/password" onSubmit={submitHandler}>
          <Input type="hidden" value="Код" name="theme" />
          <FormLabel data="input">
            <FormWrapper>
              <Cover>
                <Input data="" type="text" name="code" />
              </Cover>
              <Placeholder>Код</Placeholder>
              <FormError>Введите Код</FormError>
            </FormWrapper>
          </FormLabel>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </Form>
        <div className="flex items-center justify-center mt-8">
          <Anchor as="button">Не получил код?</Anchor>
        </div>
      </Content>
    </Section>
  )
}
