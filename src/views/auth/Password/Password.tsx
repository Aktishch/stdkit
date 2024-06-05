import React from 'react'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Eye } from '@components/Eye'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Password = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>Придумайте новый пароль</AuthSubtitle>
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
      </AuthContent>
    </AuthSection>
  )
}
