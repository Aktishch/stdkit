import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from '@hooks'
import { LabelName, InputPassword, ButtonSubmit } from '@components'
import { ButtonUnderline } from '@views/auth/components'

type Authorization = {
  login: string
  password: string
}

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<Authorization>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<Authorization> = async (
    data: Authorization
  ) => {
    loadingOn()

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  return (
    <>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Авторизация" name="theme" />
        <label>
          <LabelName>Логин</LabelName>
          <div className="relative">
            <input
              className="input input-primary input-lg dark:input-fade"
              type="text"
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
          <LabelName>Пароль</LabelName>
          <div className="relative">
            <InputPassword
              className="input input-primary input-lg dark:input-fade"
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
        <div className="flex items-center justify-center">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Забыли пароль?
          </span>
          <ButtonUnderline to="/recovery">Восстановить</ButtonUnderline>
        </div>
        <ButtonSubmit
          className="btn btn-primary btn-lg btn-fill"
          load={loadingValue}
        >
          Вход
        </ButtonSubmit>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Нет аккаунта?
        </span>
        <ButtonUnderline to="/registration">Зарегистрируйтесь</ButtonUnderline>
      </div>
    </>
  )
}
