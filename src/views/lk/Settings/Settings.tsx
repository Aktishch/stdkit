import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from '@hooks'
import {
  Icon,
  Title,
  LabelName,
  InputText,
  InputTel,
  AvatarUploader,
  ButtonSubmit,
} from '@components'

type Settings = {
  form: string
  image: string | File | undefined
  login: string
  surname: string
  name: string
  patronymic: string
  work: string
  tel: string
  email: string
}

export const Settings = () => {
  const [image, setImage] = useState<string | File | undefined>()
  const { register, handleSubmit, formState } = useForm<Settings>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<Settings> = async (data: Settings) => {
    loadingOn()
    data.image = image
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <>
      <Title className="mb-6 sm:mb-10">Настройки</Title>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Настройки" {...register('form')} />
        <AvatarUploader
          value={image}
          onChange={setImage}
          onClick={(): void => setImage(undefined)}
        />
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
              defaultValue="front-end"
              {...register('work', { required: 'Введите должность' })}
            >
              <option value="director">Директор</option>
              <option value="project">Project</option>
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-End</option>
              <option value="designer">Designer</option>
              <option value="seo">SEO-аналитик</option>
              <option value="marketing">Маркетолог</option>
              <option value="accountant">Бухгалтер</option>
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
        <ButtonSubmit
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          load={loadingValue}
        >
          Сохранить изменения
        </ButtonSubmit>
      </form>
    </>
  )
}
