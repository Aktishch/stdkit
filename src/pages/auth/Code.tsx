import React from 'react'
import { validation } from '../../functions/validation'
import { Pack } from '../../components/Pack'
import { Loader } from '../../components/Loader'
import { Picture } from '../../components/Picture'
import { FormLabel, FormWrapper, FormError } from '../../components/Form'
import { Cover } from '../../components/Cover'
import { Input } from '../../components/Input'
import { Placeholder } from '../../components/Placeholder'
import { Button } from '../../components/Button'
import { Waved } from '../../components/Waved'

export const Code = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <section className="container relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 dark:hidden">
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
      <div className="w-full max-w-[435px] bg-white dark:bg-dark rounded-6 pt-10 md:pt-14 px-4 sm:px-8 pb-7 md:pb-10 relative">
        <h4 className="mb-2 font-medium text-center sm:mb-4 text-20 sm:text-24 leading-2">Восстановление пароля</h4>
        <p className="font-normal leading-4 text-center text-14 sm:text-16 opacity-60 mb-7 md:mb-10">
          На ваш e-mail отправили код подтверждения, <br className="hidden sm:block" /> введите его нижу, чтобы изменить
          пароль
        </p>
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
          <Button
            className="font-semibold text-black border-b border-black border-opacity-50 border-dashed text-14 sm:text-16 dark:text-white dark:border-white"
            color="gray"
            size={null}
            variant={null}
          >
            <Waved variant="dark" />
            Не получил код?
          </Button>
        </div>
      </div>
    </section>
  )
}
