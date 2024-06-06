import React from 'react'
import { Link } from 'react-router-dom'
import { onInputName } from '@utils/inputs'
import { validation } from '@utils/validation'
import { Form } from '@ui/Form'
import { Label } from '@ui/Label'
import { Wrapper } from '@ui/Wrapper'
import { Error } from '@ui/Error'
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
import { LkButton } from '@views/lk/components/LkButton'
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
            <LkButton id="settings" to="/lk-tutor">
              Настройки профиля
            </LkButton>
            <LkButton id="lock" to="/lk-tutor">
              Изменить пароль
            </LkButton>
            <Form className="mt-4" action="/">
              <LkButton
                as="button"
                type="submit"
                exit={true}
                id="arrow-back"
                to="/lk-tutor"
              >
                Выйти
              </LkButton>
            </Form>
          </nav>
        </LkSidebar>
        <div className="w-full lg:max-w-[420px]">
          <Title className="mb-6 sm:mb-9">Личные данные</Title>
          <Form action="" onSubmit={submitHandler}>
            <Input type="hidden" value="Личные данные" name="theme" />
            <DownloadImage className="mb-6 sm:mb-9" />
            <div className="flex flex-col gap-6">
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
                    <Input data="name" type="text" name="work" />
                  </Cover>
                  <Placeholder>Должность</Placeholder>
                  <Error>Введите должность</Error>
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
              <Label data="input">
                <Wrapper>
                  <Cover>
                    <Input data="email" type="text" name="email" />
                  </Cover>
                  <Placeholder>E-Mail</Placeholder>
                  <Error>Некорректный адрес</Error>
                </Wrapper>
              </Label>
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
