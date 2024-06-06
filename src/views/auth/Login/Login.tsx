import React from 'react'
import { validation } from '@utils/validation'
import { useToggle } from '@hooks/useToggle'
import { Form } from '@ui/Form'
import { Label } from '@ui/Label'
import { Wrapper } from '@ui/Wrapper'
import { Error } from '@ui/Error'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Placeholder } from '@components/Placeholder'
import { Eye } from '@components/Eye'
import { Waved } from '@components/Waved'
import { Section } from '@views/auth/components/Section'
import { Bg } from '@views/auth/components/Bg'
import { Content } from '@views/auth/components/Content'
import { Logo } from '@views/auth/components/Logo'
import { Anchor } from '@views/auth/components/Anchor'
import { Toggle } from '@views/auth/components/Toggle'

export const Login = (): React.JSX.Element => {
  const { value, on, off } = useToggle({ status: false })

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <Section>
      <Bg />
      <Content>
        <Logo />
        <Form className="gap-6" action="/lk-tutor" onSubmit={submitHandler}>
          <Input
            type="hidden"
            value={`${value ? 'Куратор' : 'Студент'}`}
            name="theme"
          />
          <div className="flex items-center justify-between border border-gray border-solid rounded-2 h-[52px] overflow-hidden">
            <Toggle
              className={`${!value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={off}
            >
              Студент
            </Toggle>
            <Toggle
              className={`${value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={on}
            >
              Куратор
            </Toggle>
          </div>
          <Label data="input">
            <Wrapper>
              <Cover>
                <Input data="" type="text" name="login" />
              </Cover>
              <Placeholder>Логин</Placeholder>
              <Error>Введите логин</Error>
            </Wrapper>
          </Label>
          <Label data="input">
            <Wrapper>
              <Cover>
                <Input data="password" type="password" name="password" />
              </Cover>
              <Placeholder>Пароль</Placeholder>
              <Error>Минимальная длинна пароля 8 символов</Error>
              <Eye />
            </Wrapper>
          </Label>
          <div className="flex">
            <Anchor to="/recovery">
              Забыл пароль? А голову свою не забыл?
            </Anchor>
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
            <Anchor to="/registration">Зарегистрируйтесь</Anchor>
          </div>
        ) : (
          ''
        )}
      </Content>
    </Section>
  )
}
