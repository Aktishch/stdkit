import React from 'react'
import { validation } from '@utils/validation'
import { FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLink } from '@views/auth/components/AuthLink'
import { AuthTitle } from '@views/auth/components/AuthTitle'
import { AuthSubtitle } from '@views/auth/components/AuthSubtitle'

export const Code = (): React.JSX.Element => {
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
          На ваш e-mail отправили код подтверждения,{' '}
          <br className="hidden sm:block" /> введите его нижу, чтобы изменить
          пароль
        </AuthSubtitle>
        <form className="form" action="/password" onSubmit={submitHandler}>
          <Input type="hidden" value="Код" name="theme" />
          <FormLabel className="mb-6" data="input">
            <FormWrapper>
              <Cover>
                <Input type="text" data="" name="code" />
              </Cover>
              <Placeholder>Код</Placeholder>
              <FormError>Введите Код</FormError>
            </FormWrapper>
          </FormLabel>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </form>
        <div className="flex items-center justify-center mt-8">
          <AuthLink to="/code">Не получил код?</AuthLink>
        </div>
      </AuthContent>
    </AuthSection>
  )
}
