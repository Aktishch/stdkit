import React from 'react'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Recovery = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthTitle>Восстановление пароля</AuthTitle>
        <AuthSubtitle>
          Введите e-mail и мы вышлем <br /> код для смены пароля
        </AuthSubtitle>
        <Form className="gap-6" action="/code" onSubmit={submitHandler}>
          <Input type="hidden" value="Восстановление пароля" name="theme" />
          <FormLabel data="input">
            <FormWrapper>
              <Cover>
                <Input data="email" type="text" name="email" />
              </Cover>
              <Placeholder>E-Mail</Placeholder>
              <FormError>Некорректный адрес</FormError>
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
