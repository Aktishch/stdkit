import React from 'react'
import { Link } from 'react-router-dom'
import { onInputName } from '@utils/inputs'
import { validation } from '@utils/validation'
import { FormLabel, FormWrapper, FormError } from '@ui/Form'
import { Cover } from '@ui/Cover'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Pack } from '@ui/Pack'
import { Loader } from '@ui/Loader'
import { Picture } from '@ui/Picture'
import { Icon } from '@ui/Icon'
import { InputTel } from '@components/InputTel'
import { Placeholder } from '@components/Placeholder'
import { Waved } from '@components/Waved'

export const TutorSettings = (): React.JSX.Element => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement

    if (!validation(form)) event.preventDefault()
  }

  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const download = input.closest('[data-label="download"]') as HTMLDivElement
    const image = download.querySelector(
      '*[data-file="image"]'
    ) as HTMLImageElement
    const error = download.querySelector('*[data-error]') as HTMLSpanElement
    const file = (input.files as FileList)[0] as File
    const readFile = new FileReader() as FileReader

    file ? readFile.readAsDataURL(file) : (image.src = '')

    readFile.addEventListener('loadend', ((): void => {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        error.classList.add('visible', 'opacity-100')
        error.innerText = 'Только изображения!'
        return
      } else if (file.size > 2 * Math.pow(1024, 2)) {
        error.classList.add('visible', 'opacity-100')
        error.innerText = 'Размер не более 2 мб!'
        return
      } else {
        error.classList.remove('visible', 'opacity-100')
        image.src = String(readFile.result)
      }
    }) as EventListener)
  }

  return (
    <section className="container">
      <div className="flex gap-20">
        <div className="w-full max-w-[250px]">
          <div className="sticky left-0 right-0 top-28">
            <div className="flex items-center mb-6">
              <Pack
                className="flex items-center justify-center w-10 mr-4 min-w-10 rounded-max bg-gray"
                size="box"
              >
                <Loader />
                <Picture
                  className="image"
                  webp="img/pictures/user.webp"
                  src="img/pictures/user.jpg"
                  loading="lazy"
                />
              </Pack>
              <div className="flex flex-col">
                <span className="mb-1 font-normal truncate text-16 leading-1">
                  Щербаков Иван
                </span>
                <span className="font-normal truncate text-14 leading-1 opacity-40">
                  Куратор, веб-дизайн
                </span>
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
          </div>
        </div>
        <div className="w-full max-w-[420px]">
          <h1 className="font-medium text-24 leading-2 mb-9">Личные данные</h1>
          <form className="form" action="" onSubmit={submitHandler}>
            <Input type="hidden" value="Личные данные" name="theme" />
            <div className="flex items-center gap-4 mb-9" data-label="download">
              <Pack
                className="bg-primary w-[52px] min-w-[52px] rounded-max"
                size="box"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="text-white text-34" id="user" />
                </div>
                <Picture className="image" data="image" src="" />
              </Pack>
              <div className="relative">
                <Button
                  as="label"
                  className="text-black"
                  color="gray"
                  variant="contur"
                >
                  <Waved variant="dark" />
                  <Input
                    className="hidden"
                    size={null}
                    type="file"
                    onChange={imageHandler}
                  />
                  Загрузить новое
                </Button>
                <FormError>Только изображения!</FormError>
              </div>
              <Button
                className="w-[52px] min-w-[52px] h-[52px] rounded-2"
                color="grey"
                size={null}
              >
                <Waved variant="dark" />
                <Icon className="text-red text-24" id="trash" />
              </Button>
            </div>
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
          </form>
        </div>
      </div>
    </section>
  )
}
