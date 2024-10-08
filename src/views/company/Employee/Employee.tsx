import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  Icon,
  Title,
  Avatar,
  LabelName,
  InputPassword,
  InputText,
  InputTel,
  InputCalendar,
  Select,
  SelectButton,
  AvatarUploader,
  ButtonSubmit,
} from '@components'
import { DialogDismissal, DialogRemove } from '@dialogs'
import { ButtonTop } from '@views/company/components'

export const Employee = () => {
  const [image, setImage] = useState<string | File | undefined>(
    '/img/pictures/user.jpg'
  )
  const [work, setWork] = useState('Front-End')
  const [openDialogDismissal, setOpenDialogDismissal] = useState(false)
  const [openDialogRemove, setOpenDialogRemove] = useState(false)
  const { register, handleSubmit, formState, setValue } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const [editingValue, , , editingToggle] = useToggle(true)

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    data.image = image
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  useEffect((): void => setValue('work', work), [work])

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
                  <span className="mt-2 font-normal opacity-50 text-sm/none">
                    Front-end
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
              {editingValue ? null : (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button
                    className="btn btn-md btn-fade btn-gray"
                    onClick={() => setOpenDialogDismissal(true)}
                  >
                    <Icon className="text-2xl" id="user" />
                  </button>
                  <button
                    className="btn btn-md btn-fade btn-red"
                    onClick={() => setOpenDialogRemove(true)}
                  >
                    <Icon className="text-2xl" id="trash" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-md ">
          <div
            className={`flex flex-col gap-6 ${editingValue ? 'pointer-events-none' : null}`}
          >
            <form
              className="flex flex-col w-full gap-6"
              onSubmit={handleSubmit(submitHandler)}
            >
              <input
                type="hidden"
                value="Редактировать"
                {...register('form')}
              />
              <AvatarUploader
                value={image}
                onChange={setImage}
                onClick={(): void => setImage(undefined)}
              />
              <div className="flex flex-wrap items-center justify-between gap-5">
                <label className="flex items-center cursor-pointer">
                  <input
                    className="mr-2 switch switch-checkbox"
                    type="checkbox"
                    defaultChecked={true}
                    {...register('duty')}
                  />
                  <span className="text-base font-normal">Дежурство</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    className="mr-2 switch switch-checkbox"
                    type="checkbox"
                    {...register('admin')}
                  />
                  <span className="text-base font-normal">Администратор</span>
                </label>
              </div>
              <div>
                <LabelName>Дата трудоустройства</LabelName>
                <div className="relative">
                  <InputCalendar
                    className={`input input-calendar input-primary input-lg dark:input-fade ${formState.errors.date?.message ? 'input-error' : null}`}
                    date={new Date()}
                    setValue={setValue}
                    {...register('date', {
                      required: 'Укажите дату',
                    })}
                  />
                  {formState.errors.date?.message ? (
                    <span className="error">
                      {String(formState.errors.date?.message)}
                    </span>
                  ) : null}
                </div>
              </div>
              <label>
                <LabelName>Логин</LabelName>
                <div className="relative">
                  <input
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.login?.message ? 'input-error' : null}`}
                    type="text"
                    placeholder="Login"
                    defaultValue="Login"
                    {...register('login', { required: 'Введите логин' })}
                  />
                  {formState.errors.login?.message ? (
                    <span className="error">
                      {String(formState.errors.login?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Фамилия</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.surname?.message ? 'input-error' : null}`}
                    placeholder="Иванов"
                    defaultValue="Актищев"
                    {...register('surname', { required: 'Введите фамилию' })}
                  />
                  {formState.errors.surname?.message ? (
                    <span className="error">
                      {String(formState.errors.surname?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Имя</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.name?.message ? 'input-error' : null}`}
                    placeholder="Иван"
                    defaultValue="Александр"
                    {...register('name', { required: 'Введите имя' })}
                  />
                  {formState.errors.name?.message ? (
                    <span className="error">
                      {String(formState.errors.name?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Отчество</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.patronymic?.message ? 'input-error' : null}`}
                    placeholder="Иванович"
                    defaultValue="Михайлович"
                    {...register('patronymic', {
                      required: 'Введите отчество',
                    })}
                  />
                  {formState.errors.patronymic?.message ? (
                    <span className="error">
                      {String(formState.errors.patronymic?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              <div>
                <LabelName>Должность</LabelName>
                <div className="relative">
                  <Select
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.work?.message ? 'input-error' : null}`}
                    placeholder="Выберите должность"
                    value={work}
                    {...register('work', { required: 'Введите должность' })}
                  >
                    <SelectButton
                      title="Директор"
                      value={work}
                      onClick={(): void => setWork('Директор')}
                    >
                      Директор
                    </SelectButton>
                    <SelectButton
                      title="Project"
                      value={work}
                      onClick={(): void => setWork('Project')}
                    >
                      Project
                    </SelectButton>
                    <SelectButton
                      title="Front-End"
                      value={work}
                      onClick={(): void => setWork('Front-End')}
                    >
                      Front-End
                    </SelectButton>
                    <SelectButton
                      title="Back-end"
                      value={work}
                      onClick={(): void => setWork('Back-end')}
                    >
                      Back-end
                    </SelectButton>
                    <SelectButton
                      title="Designer"
                      value={work}
                      onClick={(): void => setWork('Designer')}
                    >
                      Designer
                    </SelectButton>
                    <SelectButton
                      title="SEO"
                      value={work}
                      onClick={(): void => setWork('SEO')}
                    >
                      SEO
                    </SelectButton>
                    <SelectButton
                      title="Content"
                      value={work}
                      onClick={(): void => setWork('Content')}
                    >
                      Content
                    </SelectButton>
                  </Select>
                  {formState.errors.work?.message ? (
                    <span className="error">
                      {String(formState.errors.work?.message)}
                    </span>
                  ) : null}
                </div>
              </div>
              <label>
                <LabelName>Телефон</LabelName>
                <div className="relative">
                  <InputTel
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.tel?.message ? 'input-error' : null}`}
                    defaultValue="+7 (988) 385-02-38"
                    {...register('tel', {
                      required: 'Введите номер телефона',
                      minLength: {
                        value: 18,
                        message: 'Некорректный номер телефона',
                      },
                    })}
                  />
                  {formState.errors.tel?.message ? (
                    <span className="error">
                      {String(formState.errors.tel?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>E-Mail</LabelName>
                <div className="relative">
                  <input
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.email?.message ? 'input-error' : null}`}
                    type="text"
                    placeholder="email@.com"
                    defaultValue="aktishch@gmail.com"
                    {...register('email', {
                      required: 'Введите e-mail',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Некорректный e-mail',
                      },
                    })}
                  />
                  {formState.errors.email?.message ? (
                    <span className="error">
                      {String(formState.errors.email?.message)}
                    </span>
                  ) : null}
                </div>
              </label>
              {editingValue ? null : (
                <>
                  <label>
                    <LabelName>Пароль</LabelName>
                    <div className="relative">
                      <InputPassword
                        className={`input input-primary input-lg dark:input-fade ${formState.errors.password?.message ? 'input-error' : null}`}
                        defaultValue="qwerty123456"
                        {...register('password', {
                          required: 'Введите пароль',
                          minLength: {
                            value: 8,
                            message: 'Минимальная длинна пароля 8 символов',
                          },
                        })}
                      />
                      {formState.errors.password?.message ? (
                        <span className="error">
                          {String(formState.errors.password?.message)}
                        </span>
                      ) : null}
                    </div>
                  </label>
                  <ButtonSubmit
                    className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
                    load={loadingValue}
                  >
                    Сохранить изменения
                  </ButtonSubmit>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <DialogDismissal
        open={openDialogDismissal}
        onClose={setOpenDialogDismissal}
        employee="Актищев Александр"
      />
      <DialogRemove
        open={openDialogRemove}
        onClose={setOpenDialogRemove}
        employee="Актищев Александр"
      />
    </>
  )
}
