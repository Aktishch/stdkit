import React from 'react'
import { Link } from 'react-router-dom'
import { validation } from '../functions/validation'
import { useToggle } from '../hooks/useToggle'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { FormLabel, FormWrapper, FormError } from '../components/Form'
import { Cover } from '../components/Cover'
import { Input } from '../components/Input'
import { Placeholder } from '../components/Placeholder'
import { Password } from '../components/Password'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const Index = (): React.JSX.Element => {
  const { value, on, off } = useToggle({ status: false })

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
        <form className="form" action="" onSubmit={submitHandler}>
          <Input type="hidden" value="Авторизация" name="theme" />
          <div className="flex items-center justify-between border border-gray border-solid rounded-2 mb-5 h-[52px] overflow-hidden">
            <FormLabel className="flex-grow h-full">
              <span
                className={`relative flex items-center justify-center w-full h-full cursor-pointer text-center text-16 leading-1 duration-2 ${
                  !value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'
                }`}
                onClick={off}
              >
                <Waved variant="dark" />
                <input className="hidden" type="radio" value="Студент" defaultChecked name="auth" />
                Студент
              </span>
            </FormLabel>
            <FormLabel className="flex-grow h-full">
              <span
                className={`relative flex items-center justify-center w-full h-full cursor-pointer text-center text-16 leading-1 duration-2 ${
                  value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'
                }`}
                onClick={on}
              >
                <Waved variant="dark" />
                <input className="hidden" type="radio" value="Куратор" name="auth" />
                Куратор
              </span>
            </FormLabel>
          </div>
          <FormLabel className="mb-6" data="input">
            <FormWrapper>
              <Cover>
                <Input type="text" data="" name="login" />
              </Cover>
              <Placeholder>Логин</Placeholder>
              <FormError>Введите логин</FormError>
            </FormWrapper>
          </FormLabel>
          <FormLabel className="mb-6" data="input">
            <FormWrapper>
              <Cover>
                <Input type="password" data="password" name="password" />
              </Cover>
              <Placeholder>Пароль</Placeholder>
              <FormError>Минимальная длинна пароля 8 символов</FormError>
              <Password />
            </FormWrapper>
          </FormLabel>
          <div className="flex mb-6">
            <Button
              className="font-semibold text-black border-b border-black border-opacity-50 border-dashed text-14 sm:text-16"
              as={Link}
              color="gray"
              size={null}
              variant={null}
              to="/password-email"
            >
              <Waved variant="dark" />
              Забыл пароль? А голову свою не забыл?
            </Button>
          </div>
          <Button type="submit">
            <Waved />
            Вход
          </Button>
        </form>
        {value ? (
          <div className="flex items-center justify-center mt-8">
            <span className="mr-2 font-normal text-14 sm:text-16 leading-1">Нет аккаунта?</span>
            <Button
              className="font-semibold text-black border-b border-black border-opacity-50 border-dashed text-14 sm:text-16"
              as={Link}
              color="gray"
              size={null}
              variant={null}
              to="/registration"
            >
              <Waved variant="dark" />
              Зарегистрируйтесь
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}
