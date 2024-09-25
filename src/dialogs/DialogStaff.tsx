import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import {
  Dialog,
  DialogProps,
  Title,
  Icon,
  LabelName,
  InputPassword,
  InputText,
  InputTel,
  InputCalendar,
  ButtonSubmit,
  Work,
} from '@components'

type DialogStaff = {
  form: string
  date: string
  login: string
  surname: string
  name: string
  patronymic: string
  work: string
  tel: string
  email: string
  password: string
  repeat: string
}

export const DialogStaff = ({ className, open, onClose }: DialogProps) => {
  const { register, handleSubmit, formState, setValue } = useForm<DialogStaff>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge('max-w-md card dark:bg-dark', className)

  const submitHandler: SubmitHandler<DialogStaff> = async (
    data: DialogStaff
  ) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <Dialog className={style} open={open} onClose={onClose}>
      <div className="px-4 py-6 bg-grey dark:bg-black/40">
        <Title className="text-center">Добавить сотрудника</Title>
      </div>
      <div className="px-4 pt-6 pb-10 sm:px-8 card-content">
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            type="hidden"
            value="Добавить сотрудника"
            {...register('form')}
          />
          <label>
            <LabelName>Дата трудоустройства</LabelName>
            <div className="relative">
              <InputCalendar
                className={`input input-calendar input-primary input-lg dark:input-fade ${formState.errors.date?.message ? 'input-error' : null}`}
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
          </label>
          <label>
            <LabelName>Логин</LabelName>
            <div className="relative">
              <input
                className={`input input-primary input-lg dark:input-fade ${formState.errors.login?.message ? 'input-error' : null}`}
                type="text"
                placeholder="Login"
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
                {...register('patronymic', { required: 'Введите отчество' })}
              />
              {formState.errors.patronymic?.message ? (
                <span className="error">
                  {String(formState.errors.patronymic?.message)}
                </span>
              ) : null}
            </div>
          </label>
          <label>
            <LabelName>Должность</LabelName>
            <div className="relative">
              <select
                className={`pr-12 input input-primary input-lg dark:input-fade ${formState.errors.work?.message ? 'input-error' : null}`}
                defaultValue=""
                {...register('work', { required: 'Введите должность' })}
              >
                <option hidden />
                <Work />
              </select>
              <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none">
                <Icon className="text-base opacity-50" id="arrow-right" />
              </span>
              {formState.errors.work?.message ? (
                <span className="error">
                  {String(formState.errors.work?.message)}
                </span>
              ) : null}
            </div>
          </label>
          <label>
            <LabelName>Телефон</LabelName>
            <div className="relative">
              <InputTel
                className={`input input-primary input-lg dark:input-fade ${formState.errors.tel?.message ? 'input-error' : null}`}
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
          <label>
            <LabelName>Пароль</LabelName>
            <div className="relative">
              <InputPassword
                className={`input input-primary input-lg dark:input-fade ${formState.errors.password?.message ? 'input-error' : null}`}
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
          <label>
            <LabelName>Повторите пароль</LabelName>
            <div className="relative">
              <InputPassword
                className={`input input-primary input-lg dark:input-fade ${formState.errors.repeat?.message ? 'input-error' : null}`}
                {...register('repeat', {
                  required: 'Повторите пароль',
                  minLength: {
                    value: 8,
                    message: 'Минимальная длинна пароля 8 символов',
                  },
                })}
              />
              {formState.errors.repeat?.message ? (
                <span className="error">
                  {String(formState.errors.repeat?.message)}
                </span>
              ) : null}
            </div>
          </label>
          <ButtonSubmit
            className="btn btn-primary btn-lg btn-fill"
            load={loadingValue}
          >
            Добавить
          </ButtonSubmit>
        </form>
      </div>
    </Dialog>
  )
}
