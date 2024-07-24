import { useState } from 'react'
import {
  InputTitle,
  InputError,
  InputText,
  InputTel,
  AvatarUploader,
} from '@components'
import { Title } from '@views/lk/components'

export const Settings = () => {
  const [image, setImage] = useState<string | File>()

  return (
    <>
      <Title className="mb-6 sm:mb-10">Личные данные</Title>
      <form className="flex flex-col gap-6" action="">
        <input type="hidden" value="Личные данные" name="theme" />
        <AvatarUploader
          value={image}
          onChange={setImage}
          onClick={(): void => setImage(undefined)}
        />
        <label>
          <InputTitle>Логин</InputTitle>
          <div className="relative">
            <input
              className="input input-primary input-lg"
              type="text"
              name="login"
            />
            <InputError>Введите логин</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Фамилия</InputTitle>
          <div className="relative">
            <InputText
              className="input input-primary input-lg"
              name="surname"
            />
            <InputError>Введите фамилию</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Имя</InputTitle>
          <div className="relative">
            <InputText className="input input-primary input-lg" name="name" />
            <InputError>Введите имя</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Отчество</InputTitle>
          <div className="relative">
            <InputText
              className="input input-primary input-lg"
              name="father-name"
            />
            <InputError>Введите отчество</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Должность</InputTitle>
          <div className="relative">
            <InputText className="input input-primary input-lg" name="work" />
            <InputError>Введите должность</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Телефон</InputTitle>
          <div className="relative">
            <InputTel className="input input-primary input-lg" name="tel" />
            <InputError>Введите телефон</InputError>
          </div>
        </label>
        <label>
          <InputTitle>E-Mail</InputTitle>
          <div className="relative">
            <input
              className="input input-primary input-lg"
              type="email"
              name="email"
            />
            <InputError>Введите e-mail</InputError>
          </div>
        </label>
        <button
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          type="submit"
        >
          Сохранить изменения
        </button>
      </form>
    </>
  )
}
