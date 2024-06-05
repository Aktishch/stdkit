import React from 'react'
import { onInputName, onInputNumber } from '@utils/inputs'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError, FormIcon } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputTel } from '@components/InputTel'
import { Placeholder } from '@components/Placeholder'
import { Eye } from '@components/Eye'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthChapter } from '@views/auth/components/AuthChapter'
import { AuthLink } from '@views/auth/components/AuthLink'

export const Registration = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-7 md:gap-10" action="/" onSubmit={submitHandler}>
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6">
            <AuthChapter src="img/pictures/chicken.svg">
              Личная информация
            </AuthChapter>
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
                  <Input
                    data="name"
                    type="text"
                    name="surname"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Фамилия</Placeholder>
                <FormError>Введите фамилию</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input
                    data="name"
                    type="text"
                    name="name"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Имя</Placeholder>
                <FormError>Введите имя</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input
                    data="name"
                    type="text"
                    name="father-name"
                    onInput={onInputName}
                  />
                </Cover>
                <Placeholder>Отчество</Placeholder>
                <FormError>Введите отчество</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
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
                <FormError>Укажите вид деятельности</FormError>
                <FormIcon
                  className="text-black opacity-50 text-14"
                  id="arrow-right"
                  right={true}
                ></FormIcon>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <InputTel />
                </Cover>
                <Placeholder>Телефон</Placeholder>
                <FormError>Введите телефон</FormError>
              </FormWrapper>
            </FormLabel>
          </div>
          <div className="flex flex-col gap-6">
            <AuthChapter src="img/pictures/school.svg">Университет</AuthChapter>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Полное название ВУЗа</Placeholder>
                <FormError>Укажите ВУЗ</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Факультет</Placeholder>
                <FormError>Укажите факультет</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
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
                <FormError>Укажите курс</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input data="" type="text" name="father-name" />
                </Cover>
                <Placeholder>Группа</Placeholder>
                <FormError>Укажите группу</FormError>
              </FormWrapper>
            </FormLabel>
          </div>
          <div className="flex flex-col gap-6">
            <AuthChapter src="img/pictures/locked.svg">Пароль</AuthChapter>
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
                  <Input
                    data="password"
                    type="password"
                    name="passwod-replay"
                  />
                </Cover>
                <Placeholder>Повторите пароль</Placeholder>
                <FormError>Минимальная длинна пароля 8 символов</FormError>
                <Eye />
              </FormWrapper>
            </FormLabel>
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
          <AuthLink to="/">Войти</AuthLink>
        </div>
      </AuthContent>
    </AuthSection>
  )
}
