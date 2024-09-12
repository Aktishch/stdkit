import { useState } from 'react'
import {
  Title,
  LabelName,
  InputText,
  InputTel,
  AvatarUploader,
} from '@components'

export const Settings = () => {
  const [image, setImage] = useState<string | File | undefined>()

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
          <LabelName>Логин</LabelName>
          <div className="relative">
            <input
              className="input input-primary input-lg dark:input-fade"
              type="text"
              name="login"
            />
            <span className="error">Введите логин</span>
          </div>
        </label>
        <label>
          <LabelName>Фамилия</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="surname"
            />
            <span className="error">Введите фамилию</span>
          </div>
        </label>
        <label>
          <LabelName>Имя</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="name"
            />
            <span className="error">Введите имя</span>
          </div>
        </label>
        <label>
          <LabelName>Отчество</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="father-name"
            />
            <span className="error">Введите отчество</span>
          </div>
        </label>
        <label>
          <LabelName>Должность</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="work"
            />
            <span className="error">Введите должность</span>
          </div>
        </label>
        <label>
          <LabelName>Телефон</LabelName>
          <div className="relative">
            <InputTel
              className="input input-primary input-lg dark:input-fade"
              name="tel"
            />
            <span className="error">Введите телефон</span>
          </div>
        </label>
        <label>
          <LabelName>E-Mail</LabelName>
          <div className="relative">
            <input
              className="input input-primary input-lg dark:input-fade"
              type="email"
              name="email"
            />
            <span className="error">Введите e-mail</span>
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
