import React from 'react'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Error } from '@ui/Error'
import { Chapter } from '@ui/Chapter'
import { InputDefault } from '@components/InputDefault'
import { InputText } from '@components/InputText'
import { InputTel } from '@components/InputTel'
import { InputPassword } from '@components/InputPassword'
import { Select } from '@components/Select'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'

export const Registration = (): React.JSX.Element => {
  const options = [
    {
      value: 'empty',
      text: '',
    },
    {
      value: '1',
      text: '1',
    },
    {
      value: '2',
      text: '2',
    },
    {
      value: '3',
      text: '3',
    },
  ]

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-7 md:gap-10" action="/">
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/chicken.svg">Личная информация</Chapter>
            <InputDefault type="text" placeholder="Логин" name="login">
              <Error>Введите логин</Error>
            </InputDefault>
            <InputText placeholder="Фамилия" name="surname">
              <Error>Введите фамилию</Error>
            </InputText>
            <InputText placeholder="Имя" name="name">
              <Error>Введите имя</Error>
            </InputText>
            <InputText placeholder="Отчество" name="father-name">
              <Error>Введите отчество</Error>
            </InputText>
            <Select
              placeholder="Вид деятельности"
              name="activity"
              options={options}
            >
              <Error>Укажите вид деятельности</Error>
            </Select>
            <InputTel placeholder="Телефон" name="tel">
              <Error>Введите телефон</Error>
            </InputTel>
          </div>
          {/* <div className="flex flex-col gap-6">
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
                  className="text-sm text-black opacity-50"
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
          </div> */}
          <Button type="submit">
            <Waved />
            Зарегистрироваться
          </Button>
        </Form>
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Есть аккаунт?
          </span>
          <AuthLink to="/">Войти</AuthLink>
        </div>
      </AuthContent>
    </AuthSection>
  )
}
