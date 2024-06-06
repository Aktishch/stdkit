import React from 'react'
import { Link } from 'react-router-dom'
import { onInputName } from '@utils/inputs'
import { validation } from '@utils/validation'
import { Form, FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Icon } from '@ui/Icon'
import { Title } from '@ui/Title'
import { UserAva } from '@ui/UserAva'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import { InputTel } from '@components/InputTel'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'
import { LkSidebar } from '@views/lk/components/LkSidebar'
import { DownloadImage } from '@views/lk/components/DownloadImage'

export const TutorSettings = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  return (
    <section className="container">
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <LkSidebar>
          <div className="flex items-center mb-6">
            <UserAva className="mr-4" />
            <div className="flex flex-col">
              <UserName>Щербаков Иван</UserName>
              <UserPost>Куратор, веб-дизайн</UserPost>
            </div>
          </div>
          <nav className="flex flex-col">
            <Button
              className="justify-start px-4 font-normal text-black"
              color="gray"
              variant={null}
              as={Link}
              to="/lk-tutor"
            >
              <Waved variant="dark" />
              <Icon className="mr-4 text-primary text-24" id="settings" />
              Настройки профиля
            </Button>
            <Button
              className="justify-start px-4 font-normal text-black"
              color="gray"
              variant={null}
              as={Link}
              to="/lk-tutor"
            >
              <Waved variant="dark" />
              <Icon className="mr-4 text-primary text-24" id="lock" />
              Изменить пароль
            </Button>
          </nav>
        </LkSidebar>
        <div className="w-full lg:max-w-[420px]">
          <Title className="mb-6 sm:mb-9">Личные данные</Title>
          <Form action="" onSubmit={submitHandler}>
            <Input type="hidden" value="Личные данные" name="theme" />
            <DownloadImage className="mb-6 sm:mb-9" />
            <div className="flex flex-col gap-6">
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
                    <Input data="name" type="text" name="work" />
                  </Cover>
                  <Placeholder>Должность</Placeholder>
                  <FormError>Введите должность</FormError>
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
              <FormLabel data="input">
                <FormWrapper>
                  <Cover>
                    <Input data="email" type="text" name="email" />
                  </Cover>
                  <Placeholder>E-Mail</Placeholder>
                  <FormError>Некорректный адрес</FormError>
                </FormWrapper>
              </FormLabel>
              <Button className="w-full max-w-60" type="submit">
                <Waved />
                Сохранить изменения
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}
