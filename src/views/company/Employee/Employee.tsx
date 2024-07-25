import { useState } from 'react'
import { useToggle } from '@hooks'
import {
  Title,
  Icon,
  InputTitle,
  InputError,
  InputPassword,
  InputText,
  InputTel,
  AvatarUploader,
} from '@components'

export const Employee = () => {
  const [image, setImage] = useState<string | File | undefined>(
    '/img/pictures/user.jpg'
  )
  const [editingValue, , , editingToggle] = useToggle(true)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>О сотруднике</Title>
        <button
          className="btn btn-primary btn-lg btn-fade group"
          onClick={editingToggle}
        >
          <Icon
            className="mr-2 text-2xl duration-200 text-primary group-hover:text-white"
            id="pen"
          />
          {editingValue ? 'Редактировать' : 'Запретить'}
        </button>
      </div>
      <div className="flex flex-col gap-6 lg:mx-auto lg:max-w-md">
        <form className="flex flex-col w-full gap-6" action="">
          <input type="hidden" value="Редактировать" name="theme" />
          <AvatarUploader
            className={editingValue ? 'pointer-events-none opacity-50' : null}
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
                defaultValue="Login"
                disabled={editingValue}
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
                defaultValue="Актищев"
                disabled={editingValue}
                name="surname"
              />
              <InputError>Введите фамилию</InputError>
            </div>
          </label>
          <label>
            <InputTitle>Имя</InputTitle>
            <div className="relative">
              <InputText
                className="input input-primary input-lg"
                defaultValue="Александр"
                disabled={editingValue}
                name="name"
              />
              <InputError>Введите имя</InputError>
            </div>
          </label>
          <label>
            <InputTitle>Отчество</InputTitle>
            <div className="relative">
              <InputText
                className="input input-primary input-lg"
                defaultValue="Михайлович"
                disabled={editingValue}
                name="father-name"
              />
              <InputError>Введите отчество</InputError>
            </div>
          </label>
          <label>
            <InputTitle>Должность</InputTitle>
            <div className="relative">
              <InputText
                className="input input-primary input-lg"
                defaultValue="Front end"
                disabled={editingValue}
                name="work"
              />
              <InputError>Введите должность</InputError>
            </div>
          </label>
          <label>
            <InputTitle>Телефон</InputTitle>
            <div className="relative">
              <InputTel
                className="input input-primary input-lg"
                defaultValue="+7 (988) 385-02-38"
                disabled={editingValue}
                name="tel"
              />
              <InputError>Введите телефон</InputError>
            </div>
          </label>
          <label>
            <InputTitle>E-Mail</InputTitle>
            <div className="relative">
              <input
                className="input input-primary input-lg"
                type="email"
                defaultValue="a.aktishev@stdkit.ru"
                disabled={editingValue}
                name="email"
              />
              <InputError>Введите e-mail</InputError>
            </div>
          </label>
          {editingValue ? null : (
            <>
              <label>
                <InputTitle>Пароль</InputTitle>
                <div className="relative">
                  <InputPassword
                    className="input input-primary input-lg"
                    defaultValue="12345678"
                    name="password"
                  />
                  <InputError>Введите пароль</InputError>
                </div>
              </label>
              <button className="btn btn-primary btn-lg btn-fill" type="submit">
                Сохранить изменения
              </button>
            </>
          )}
        </form>
        {editingValue ? null : (
          <div className="grid gap-6 grid-cols- sm:grid-cols-2">
            <form className="flex-grow" action="">
              <input type="hidden" value="Архивировать" name="theme" />
              <button
                className="w-full btn btn-primary btn-lg btn-fade"
                type="submit"
              >
                Архивировать
              </button>
            </form>
            <form className="flex-grow" action="">
              <input type="hidden" value="Удалить" name="theme" />
              <button
                className="w-full btn btn-red btn-lg btn-fade"
                type="submit"
              >
                Удалить
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}
