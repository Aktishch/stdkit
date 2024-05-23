import React from 'react'
import { Link } from 'react-router-dom'
import { onInputName, onInputNumber } from '../functions/inputs'
import { validation } from '../functions/validation'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { FormLabel, FormWrapper, FormError, FormIcon } from '../components/Form'
import { Cover } from '../components/Cover'
import { Input } from '../components/Input'
import { InputTel } from '../components/InputTel'
import { Placeholder } from '../components/Placeholder'
import { Password } from '../components/Password'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const Registration = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <section className="container relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0">
        <Pack className="h-full bg-gray" size={null}>
          <Loader />
          <Picture
            className="image"
            webp="img/pictures/authorization-bg.webp"
            src="img/pictures/authorization-bg.jpg"
            loading="lazy"
          />
        </Pack>
      </div>
      <div className="w-full max-w-[435px] bg-white rounded-6 pt-10 md:pt-20 px-4 sm:px-8 pb-7 md:pb-10 relative">
        <Picture className="block w-full mx-auto mb-4 md:mb-8 max-w-24" src="img/pictures/logo-practice.svg" />
        <Picture className="block w-full mx-auto mb-8 sm:mb-12 lg:mb-24 max-w-56" src="img/pictures/logo-stdkit.svg" />
        <form className="form" action="/" onSubmit={submitHandler}>
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6 mb-7 md:mb-10">
            <div className="flex items-center justify-between">
              <h3 className="mr-2 font-semibold text-18 sm:text-20 leading-1">Личная информация</h3>
              <Picture className="icon text-24" src="img/pictures/chicken.svg" />
            </div>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="" name="login" />
                </Cover>
                <Placeholder>Логин</Placeholder>
                <FormError>Введите логин</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="name" name="surname" onInput={onInputName} />
                </Cover>
                <Placeholder>Фамилия</Placeholder>
                <FormError>Введите фамилию</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="name" name="name" onInput={onInputName} />
                </Cover>
                <Placeholder>Имя</Placeholder>
                <FormError>Введите имя</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="name" name="father-name" onInput={onInputName} />
                </Cover>
                <Placeholder>Отчество</Placeholder>
                <FormError>Введите отчество</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input tag="select" data="select" name="activity">
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
                <FormIcon className="opacity-50 text-14" id="arrow-right" right={true}></FormIcon>
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
          <div className="flex flex-col gap-6 mb-7 md:mb-10">
            <div className="flex items-center justify-between">
              <h3 className="mr-2 font-semibold text-18 sm:text-20 leading-1">Университет</h3>
              <Picture className="icon text-24" src="img/pictures/school.svg" />
            </div>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="" name="father-name" />
                </Cover>
                <Placeholder>Полное название ВУЗа</Placeholder>
                <FormError>Укажите ВУЗ</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="" name="father-name" />
                </Cover>
                <Placeholder>Факультет</Placeholder>
                <FormError>Укажите факультет</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="" maxLength={1} name="father-name" onInput={onInputNumber} />
                </Cover>
                <Placeholder>Курс</Placeholder>
                <FormError>Укажите курс</FormError>
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="text" data="" name="father-name" />
                </Cover>
                <Placeholder>Группа</Placeholder>
                <FormError>Укажите группу</FormError>
              </FormWrapper>
            </FormLabel>
          </div>
          <div className="flex flex-col gap-6 mb-7 md:mb-10">
            <div className="flex items-center justify-between">
              <h3 className="mr-2 font-semibold text-18 sm:text-20 leading-1">Пароль</h3>
              <Picture className="icon text-24" src="img/pictures/locked.svg" />
            </div>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="password" data="password" name="password" />
                </Cover>
                <Placeholder>Пароль</Placeholder>
                <FormError>Минимальная длинна пароля 8 символов</FormError>
                <Password />
              </FormWrapper>
            </FormLabel>
            <FormLabel data="input">
              <FormWrapper>
                <Cover>
                  <Input type="password" data="password" name="passwod-replay" />
                </Cover>
                <Placeholder>Повторите пароль</Placeholder>
                <FormError>Минимальная длинна пароля 8 символов</FormError>
                <Password />
              </FormWrapper>
            </FormLabel>
          </div>
          <Button type="submit">
            <Waved />
            Зарегистрироваться
          </Button>
        </form>
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 font-normal text-14 sm:text-16 leading-1">Есть аккаунт?</span>
          <Button
            className="font-semibold text-black border-b border-black border-opacity-50 border-dashed text-14 sm:text-16"
            as={Link}
            color="gray"
            size={null}
            variant={null}
            to="/"
          >
            <Waved variant="dark" />
            Войти
          </Button>
        </div>
      </div>
    </section>
  )
}
