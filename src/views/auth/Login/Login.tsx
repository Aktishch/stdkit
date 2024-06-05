import React from 'react'
import { validation } from '@utils/validation'
import { useToggle } from '@hooks/useToggle'
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
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'
import { LoginToggle } from '@views/auth/Login/components/LoginToggle'

export const Login = (): React.JSX.Element => {
  const { value, on, off } = useToggle({ status: false })

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-6" action="/lk-tutor" onSubmit={submitHandler}>
          <Input
            type="hidden"
            value={`${value ? 'Куратор' : 'Студент'}`}
            name="theme"
          />
          <div className="flex items-center justify-between border border-gray border-solid rounded-2 h-[52px] overflow-hidden">
            <LoginToggle
              className={`${!value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={off}
            >
              Студент
            </LoginToggle>
            <LoginToggle
              className={`${value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={on}
            >
              Куратор
            </LoginToggle>
          </div>
          <FormLabel data="input">
            <FormWrapper>
              <Cover>
                <Input data="" type="text" name="login" />
              </Cover>
              <Placeholder>Логин</Placeholder>
              <FormError>Введите логин</FormError>
            </FormWrapper>
          </FormLabel>
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
          <div className="flex">
            <AuthLink to="/recovery">
              Забыл пароль? А голову свою не забыл?
            </AuthLink>
          </div>
          <Button type="submit">
            <Waved />
            Вход
          </Button>
        </Form>
        {value ? (
          <div className="flex items-center justify-center mt-8">
            <span className="mr-2 font-normal text-14 sm:text-16 leading-1">
              Нет аккаунта?
            </span>
            <AuthLink to="/registration">Зарегистрируйтесь</AuthLink>
          </div>
        ) : (
          ''
        )}
      </AuthContent>
    </AuthSection>
  )
}
