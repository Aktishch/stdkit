import { useState } from 'react'
import { useToggle } from '@hooks'
import {
  Icon,
  Title,
  Avatar,
  LabelName,
  InputPassword,
  InputText,
  InputTel,
  AvatarUploader,
} from '@components'
import { ButtonTop } from '@views/company/components'

export const Employee = () => {
  const [image, setImage] = useState<string | File | undefined>(
    '/img/pictures/user.jpg'
  )
  const [editingValue, , , editingToggle] = useToggle(true)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>О сотруднике</Title>
        <ButtonTop id="pen" onClick={editingToggle}>
          {editingValue ? 'Редактировать' : 'Отмена'}
        </ButtonTop>
      </div>
      <div className="flex flex-col gap-6 sm:gap-10 md:flex-row lg:gap-20">
        <div className="w-full xs:max-w-64">
          <div className="px-4 py-6 card md:sticky md:top-28 md:left-0 md:right-0 dark:bg-dark">
            <div className="card-content">
              <div className="flex items-center mb-4 sm:mb-6">
                <Avatar
                  className="mr-4 text-2xl size-10"
                  src="/img/pictures/user.jpg"
                  load={true}
                />
                <div className="flex flex-col overflow-hidden">
                  <span className="font-normal truncate text-base/none">
                    Актищев Александр
                  </span>
                  <span className="mt-1 font-normal truncate opacity-50 text-sm/none">
                    Front-end разработчик
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between gap-4">
                  <Icon
                    className="text-xl text-primary color-yellow"
                    id="star"
                  />
                  <span className="mr-auto font-normal opacity-60 text-sm/none">
                    рейтинг дежурства:
                  </span>
                  <b className="text-base/none min-w-max">4.5</b>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <Icon
                    className="text-xl text-primary color-blue"
                    id="hourglass"
                  />
                  <span className="mr-auto font-normal opacity-60 text-sm/none">
                    сверхурочные:
                  </span>
                  <b className="text-base/none min-w-max">8</b>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <Icon
                    className="text-xl text-primary color-purple"
                    id="hourglass"
                  />
                  <span className="mr-auto font-normal opacity-60 text-sm/none">
                    пропуски:
                  </span>
                  <b className="text-base/none min-w-max">2</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-md ">
          <div
            className={`flex flex-col gap-6 ${editingValue ? 'pointer-events-none' : null}`}
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
                    className="pr-10 input input-calendar input-primary input-lg dark:input-fade"
                    type="date"
                    defaultValue="2021-09-01"
                    readOnly={editingValue}
                    name="date"
                  />
                  <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none">
                    <Icon className="text-2xl opacity-50" id="calendar" />
                  </span>
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
                  <label className="flex items-center cursor-pointer w-max">
                    <input
                      className="mr-2 switch switch-checkbox"
                      type="checkbox"
                      name="remotely"
                    />
                    <span className="text-base font-normal">
                      Удаленная работа
                    </span>
                  </label>
                  <button
                    className="btn btn-primary btn-lg btn-fill"
                    type="submit"
                  >
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
        </div>
      </div>
    </>
  )
}
