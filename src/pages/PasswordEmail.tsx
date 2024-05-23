import React from 'react'
import { validation } from '../functions/validation'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { FormLabel, FormWrapper, FormError } from '../components/Form'
import { Cover } from '../components/Cover'
import { Input } from '../components/Input'
import { Placeholder } from '../components/Placeholder'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const PasswordEmail = (): React.JSX.Element => {
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
      <div className="w-full max-w-[435px] bg-white rounded-6 pt-10 md:pt-14 px-4 sm:px-8 pb-7 md:pb-10 relative">
        <h4 className="mb-2 font-medium text-center sm:mb-4 text-20 sm:text-24 leading-2">Восстановление пароля</h4>
        <p className="font-normal leading-4 text-center text-14 sm:text-16 opacity-60 mb-7 md:mb-10">
          Введите e-mail и мы вышлем <br /> код для смены пароля
        </p>
        <form className="form" action="/password-code" onSubmit={submitHandler}>
          <Input type="hidden" value="Восстановление пароля" name="theme" />
          <FormLabel className="mb-6" data="input">
            <FormWrapper>
              <Cover>
                <Input type="text" data="email" name="email" />
              </Cover>
              <Placeholder>E-Mail</Placeholder>
              <FormError>Некорректный адрес</FormError>
            </FormWrapper>
          </FormLabel>
          <Button type="submit">
            <Waved />
            Восстановить
          </Button>
        </form>
      </div>
    </section>
  )
}
