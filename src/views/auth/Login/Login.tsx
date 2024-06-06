import React, { useState } from 'react'
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

  const [data, setData] = useState({
    login: '',
    password: '',
  })

  const [error, setError] = useState({
    login: '',
    password: '',
  })

  const [validate, setValidate] = useState({
    login: false,
    password: false,
  })

  const setState = ({
    name,
    text,
    status,
  }: {
    name: string
    text: string
    status: boolean
  }): void => {
    setError((prevState) => ({
      ...prevState,
      [name]: text,
    }))

    setValidate((prevState) => ({
      ...prevState,
      [name]: status,
    }))
  }

  const inputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    switch (name) {
      case 'login': {
        switch (value.length === 0) {
          case true: {
            setState({ name: name, text: 'Введите логин', status: false })
            break
          }

          case false: {
            setState({ name: name, text: '', status: true })
            break
          }
        }

        break
      }

      case 'password': {
        switch (value.length < 8) {
          case true: {
            setState({
              name: name,
              text: 'Минимальная длинна пароля 8 символов',
              status: false,
            })
            break
          }

          case false: {
            setState({ name: name, text: '', status: true })
            break
          }
        }

        break
      }
    }
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const validation: boolean = Object.values(validate).every(
      (item) => item === true
    )

    if (!validation) event.preventDefault()
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
          <Label>
            <Wrapper>
              <Cover>
                <Input
                  className={error.login !== '' ? 'input-error' : ''}
                  type="text"
                  value={data.login}
                  name="login"
                  onInput={inputHandler}
                />
              </Cover>
              <Placeholder>Логин</Placeholder>
              {error.login !== '' ? <Error>{error.login}</Error> : ''}
            </Wrapper>
          </Label>
          <Label data="input">
            <Wrapper>
              <Cover>
                <Input
                  className={error.password !== '' ? 'input-error' : ''}
                  type="password"
                  value={data.password}
                  name="password"
                  onInput={inputHandler}
                />
              </Cover>
              <Placeholder>Пароль</Placeholder>
              {error.password !== '' ? <Error>{error.password}</Error> : ''}
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
