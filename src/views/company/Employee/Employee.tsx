import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  Icon,
  Title,
  Avatar,
  LabelName,
  Error,
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
import {
  BreadCrumbs,
  BreadCrumbsItem,
  Head,
  HeadButton,
} from '@views/company/components'

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
      <BreadCrumbs>
        <BreadCrumbsItem to="/lk/staff/">Сотрудники</BreadCrumbsItem>
        <BreadCrumbsItem to="/lk/staff/employee/">О сотруднике</BreadCrumbsItem>
      </BreadCrumbs>
      <Head>
        <Title>О сотруднике</Title>
        <HeadButton id="pen" onClick={editingToggle}>
          {editingValue ? 'Редактировать' : 'Отмена'}
        </HeadButton>
      </Head>
      <div className="flex flex-col gap-6 sm:gap-10 md:flex-row lg:gap-20">
        <div className="w-full xs:max-w-64">
          <div className="md:sticky md:top-28 md:left-0 md:right-0">
            <div className="px-4 py-6 card dark:bg-dark">
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
        </div>
        <div className="w-full lg:max-w-md ">
          <div
            className={`flex flex-col gap-6 ${editingValue ? 'pointer-events-none' : ''}`}
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
                    className={`input input-calendar input-primary input-lg dark:input-fade ${formState.errors.date?.message ? 'input-error' : ''}`}
                    date={new Date()}
                    setValue={setValue}
                    {...register('date', {
                      required: 'Укажите дату',
                    })}
                  />
                  {formState.errors.date?.message ? (
                    <Error>{String(formState.errors.date?.message)}</Error>
                  ) : null}
                </div>
              </div>
              <label>
                <LabelName>Логин</LabelName>
                <div className="relative">
                  <input
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.login?.message ? 'input-error' : ''}`}
                    type="text"
                    placeholder="Login"
                    defaultValue="Login"
                    {...register('login', { required: 'Введите логин' })}
                  />
                  {formState.errors.login?.message ? (
                    <Error>{String(formState.errors.login?.message)}</Error>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Фамилия</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.surname?.message ? 'input-error' : ''}`}
                    placeholder="Иванов"
                    defaultValue="Актищев"
                    {...register('surname', { required: 'Введите фамилию' })}
                  />
                  {formState.errors.surname?.message ? (
                    <Error>{String(formState.errors.surname?.message)}</Error>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Имя</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.name?.message ? 'input-error' : ''}`}
                    placeholder="Иван"
                    defaultValue="Александр"
                    {...register('name', { required: 'Введите имя' })}
                  />
                  {formState.errors.name?.message ? (
                    <Error>{String(formState.errors.name?.message)}</Error>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>Отчество</LabelName>
                <div className="relative">
                  <InputText
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.patronymic?.message ? 'input-error' : ''}`}
                    placeholder="Иванович"
                    defaultValue="Михайлович"
                    {...register('patronymic', {
                      required: 'Введите отчество',
                    })}
                  />
                  {formState.errors.patronymic?.message ? (
                    <Error>
                      {String(formState.errors.patronymic?.message)}
                    </Error>
                  ) : null}
                </div>
              </label>
              <div>
                <LabelName>Должность</LabelName>
                <div className="relative">
                  <Select
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.work?.message ? 'input-error' : ''}`}
                    placeholder="Выберите должность"
                    value={work}
                    {...register('work', { required: 'Введите должность' })}
                  >
                    <SelectButton
                      title="Директор"
                      value={work}
                      onClick={(): void => setWork('Директор')}
                    />
                    <SelectButton
                      title="Project"
                      value={work}
                      onClick={(): void => setWork('Project')}
                    />
                    <SelectButton
                      title="Front-End"
                      value={work}
                      onClick={(): void => setWork('Front-End')}
                    />
                    <SelectButton
                      title="Back-end"
                      value={work}
                      onClick={(): void => setWork('Back-end')}
                    />
                    <SelectButton
                      title="Designer"
                      value={work}
                      onClick={(): void => setWork('Designer')}
                    />
                    <SelectButton
                      title="SEO"
                      value={work}
                      onClick={(): void => setWork('SEO')}
                    />
                    <SelectButton
                      title="Content"
                      value={work}
                      onClick={(): void => setWork('Content')}
                    />
                  </Select>
                  {formState.errors.work?.message ? (
                    <Error>{String(formState.errors.work?.message)}</Error>
                  ) : null}
                </div>
              </div>
              <label>
                <LabelName>Телефон</LabelName>
                <div className="relative">
                  <InputTel
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.tel?.message ? 'input-error' : ''}`}
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
                    <Error>{String(formState.errors.tel?.message)}</Error>
                  ) : null}
                </div>
              </label>
              <label>
                <LabelName>E-Mail</LabelName>
                <div className="relative">
                  <input
                    className={`input input-primary input-lg dark:input-fade ${formState.errors.email?.message ? 'input-error' : ''}`}
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
                    <Error>{String(formState.errors.email?.message)}</Error>
                  ) : null}
                </div>
              </label>
              {editingValue ? null : (
                <>
                  <label>
                    <LabelName>Пароль</LabelName>
                    <div className="relative">
                      <InputPassword
                        className={`input input-primary input-lg dark:input-fade ${formState.errors.password?.message ? 'input-error' : ''}`}
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
                        <Error>
                          {String(formState.errors.password?.message)}
                        </Error>
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
