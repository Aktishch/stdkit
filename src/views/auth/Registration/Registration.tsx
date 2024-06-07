import React from 'react'
import { onInputName, onInputNumber } from '@utils/inputs'
import { validation } from '@utils/validation'
import { Form } from '@ui/Form'
import { Label } from '@ui/Label'
import { Wrapper } from '@ui/Wrapper'
import { Error } from '@ui/Error'
import { InputIcon } from '@ui/InputIcon'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputTel } from '@components/InputTel'
import { Placeholder } from '@components/Placeholder'
import { Eye } from '@components/Eye'
import { Waved } from '@components/Waved'
import { Section } from '@views/auth/components/Section'
import { Bg } from '@views/auth/components/Bg'
import { Content } from '@views/auth/components/Content'
import { Logo } from '@views/auth/components/Logo'
import { Chapter } from '@views/auth/components/Chapter'
import { Anchor } from '@views/auth/components/Anchor'

export const Registration = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <Section>
      <Bg />
      <Content>
        <Logo />
        <Form className="gap-7 md:gap-10" action="/" onSubmit={submitHandler}>
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/chicken.svg">Личная информация</Chapter>
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
                  <Input
                    data="name"
                    type="text"
                    name="surname"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Фамилия</Placeholder>
                <Error>Введите фамилию</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input
                    data="name"
                    type="text"
                    name="name"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Имя</Placeholder>
                <Error>Введите имя</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input
                    data="name"
                    type="text"
                    name="father-name"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Отчество</Placeholder>
                <Error>Введите отчество</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input data="select" tag="select" name="activity">
                    <option value="empty" hidden>
                      Ваш вид деятельности
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Input>
                </Cover>
                <Placeholder>Вид деятельности</Placeholder>
                <Error>Укажите вид деятельности</Error>
                <InputIcon
                  className="text-black opacity-50 text-14"
                  id="arrow-right"
                  right={true}
                ></InputIcon>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <InputTel />
                </Cover>
                <Placeholder>Телефон</Placeholder>
                <Error>Введите телефон</Error>
              </Wrapper>
            </Label>
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/school.svg">Университет</Chapter>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Полное название ВУЗа</Placeholder>
                <Error>Укажите ВУЗ</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Факультет</Placeholder>
                <Error>Укажите факультет</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input
                    data=""
                    type="text"
                    maxLength={1}
                    name="father-name"
                    onInput={onInputNumber}
                  />
                </Cover>
                <Placeholder>Курс</Placeholder>
                <Error>Укажите курс</Error>
              </Wrapper>
            </Label>
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Группа</Placeholder>
                <Error>Укажите группу</Error>
              </Wrapper>
            </Label>
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/locked.svg">Пароль</Chapter>
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
            <Label data="input">
              <Wrapper>
                <Cover>
                  <Input
                    data="password"
                    type="password"
                    name="passwod-replay"
                  />
                </Cover>
                <Placeholder>Повторите пароль</Placeholder>
                <Error>Минимальная длинна пароля 8 символов</Error>
                <Eye />
              </Wrapper>
            </Label>
          </div>
          <Button type="submit">
            <Waved />
            Зарегистрироваться
          </Button>
        </Form>
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 font-normal text-14 sm:text-16 leading-1">
            Есть аккаунт?
          </span>
          <Anchor to="/">Войти</Anchor>
        </div>
      </Content>
    </Section>
  )
}
