import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import {
  LabelName,
  Error,
  InputPassword,
  InputText,
  InputTel,
  Select,
  SelectButton,
  ButtonSubmit,
} from '@components'
import { ButtonUnderline } from '@views/auth/components'

export const Registration = () => {
  const [work, setWork] = useState('')
  const { register, handleSubmit, formState, setValue } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  useEffect((): void => setValue('work', work), [work])

  return (
    <>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Регистрация" {...register('form')} />
        <label>
          <LabelName>Логин</LabelName>
          <div className="relative">
            <input
              className={`input input-primary input-lg dark:input-fade ${formState.errors.login?.message ? 'input-error' : ''}`}
              type="text"
              placeholder="Login"
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
              {...register('patronymic', { required: 'Введите отчество' })}
            />
            {formState.errors.patronymic?.message ? (
              <Error>{String(formState.errors.patronymic?.message)}</Error>
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
        <label>
          <LabelName>Пароль</LabelName>
          <div className="relative">
            <InputPassword
              className={`input input-primary input-lg dark:input-fade ${formState.errors.password?.message ? 'input-error' : ''}`}
              {...register('password', {
                required: 'Введите пароль',
                minLength: {
                  value: 8,
                  message: 'Минимальная длинна пароля 8 символов',
                },
              })}
            />
            {formState.errors.password?.message ? (
              <Error>{String(formState.errors.password?.message)}</Error>
            ) : null}
          </div>
        </label>
        <label>
          <LabelName>Повторите пароль</LabelName>
          <div className="relative">
            <InputPassword
              className={`input input-primary input-lg dark:input-fade ${formState.errors.repeat?.message ? 'input-error' : ''}`}
              {...register('repeat', {
                required: 'Повторите пароль',
                minLength: {
                  value: 8,
                  message: 'Минимальная длинна пароля 8 символов',
                },
              })}
            />
            {formState.errors.repeat?.message ? (
              <Error>{String(formState.errors.repeat?.message)}</Error>
            ) : null}
          </div>
        </label>
        <ButtonSubmit
          className="btn btn-primary btn-lg btn-fill"
          load={loadingValue}
        >
          Зарегистрироваться
        </ButtonSubmit>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Есть аккаунт?
        </span>
        <ButtonUnderline to="/login">Войти</ButtonUnderline>
      </div>
    </>
  )
}
