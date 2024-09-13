import { useState } from 'react'
import { useToggle } from '@hooks'
import {
  Title,
  Icon,
  LabelName,
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
      <div
        className={`flex flex-col gap-6 lg:mx-auto lg:max-w-md ${editingValue ? 'pointer-events-none' : null}`}
      >
        <form className="flex flex-col w-full gap-6" action="">
          <input type="hidden" value="Редактировать" name="theme" />
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
                defaultValue="Login"
                readOnly={editingValue}
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
                defaultValue="Актищев"
                readOnly={editingValue}
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
                defaultValue="Александр"
                readOnly={editingValue}
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
                defaultValue="Михайлович"
                readOnly={editingValue}
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
                defaultValue="Front end"
                readOnly={editingValue}
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
                defaultValue="+7 (988) 385-02-38"
                readOnly={editingValue}
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
                defaultValue="a.aktishev@stdkit.ru"
                readOnly={editingValue}
                name="email"
              />
              <span className="error">Введите e-mail</span>
            </div>
          </label>
          <label>
            <LabelName>Дата трудоустройства</LabelName>
            <div className="relative">
              <input
                className="input input-primary input-lg dark:input-fade"
                type="date"
                defaultValue="2021-09-01"
                readOnly={editingValue}
                name="date"
              />
              <span className="error">Введите дату</span>
            </div>
          </label>
          {editingValue ? null : (
            <>
              <label>
                <LabelName>Пароль</LabelName>
                <div className="relative">
                  <InputPassword
                    className="input input-primary input-lg dark:input-fade"
                    defaultValue="12345678"
                    readOnly={editingValue}
                    name="password"
                  />
                  <span className="error">Введите пароль</span>
                </div>
              </label>
              <button className="btn btn-primary btn-lg btn-fill" type="submit">
                Сохранить изменения
              </button>
            </>
          )}
        </form>
        {editingValue ? null : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
