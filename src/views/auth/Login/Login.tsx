import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import { LabelName, Error, InputPassword, ButtonSubmit } from '@components'
import { ButtonUnderline } from '@views/auth/components'

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    console.log(data)

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
        <input type="hidden" value="Авторизация" {...register('form')} />
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
        <div className="flex items-center justify-center">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Забыли пароль?
          </span>
          <ButtonUnderline to="/recovery/">Восстановить</ButtonUnderline>
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
        <ButtonUnderline to="/registration/">Зарегистрируйтесь</ButtonUnderline>
      </div>
    </>
  )
}
