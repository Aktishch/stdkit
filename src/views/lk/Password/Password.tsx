import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from '@hooks'
import { Title, LabelName, InputPassword, ButtonSubmit } from '@components'

type Password = {
  form: string
  password: string
  repeat: string
}

export const Password = () => {
  const { register, handleSubmit, formState } = useForm<Password>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<Password> = async (data: Password) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <>
      <Title className="mb-6 sm:mb-10">Изменить пароль</Title>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Изменить пароль" {...register('form')} />
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
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          load={loadingValue}
        >
          Сохранить изменения
        </ButtonSubmit>
      </form>
      <ul className="flex flex-col gap-2 mt-6 font-normal sm:gap-3 text-red sm:mt-10 text-xs/tight sm:text-sm/tight">
        <li>
          Пароль должен быть не менее <b>8 символов длиной</b>
        </li>
        <li>
          Пароль должен содержать <b>цифры (0-9)</b>
        </li>
        <li>
          Пароль должен содержать{' '}
          <b>латинские символы нижнего регистра (a-z)</b>
        </li>
      </ul>
    </>
  )
}
