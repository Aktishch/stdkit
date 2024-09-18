import { SubmitHandler, useForm } from 'react-hook-form'
import { useToggle } from '@hooks'
import { LabelName, InputPassword, ButtonSubmit } from '@components'
import { Title, Subtitle } from '@views/auth/components'

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
      <Title>Восстановление пароля</Title>
      <Subtitle>Придумайте новый пароль </Subtitle>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Новый пароль" {...register('form')} />
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
          Восстановить
        </ButtonSubmit>
      </form>
    </>
  )
}
