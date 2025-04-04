import { ButtonSubmit, Error, InputPassword, LabelName } from '@components'
import { useToggle } from '@hooks'
import { DataForm, TSXComponent } from '@utils'
import { Subtitle, Title } from '@views/auth/components'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Password = (): TSXComponent => {
  const { register, handleSubmit, formState } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm): Promise<void> => {
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
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
        <input type="hidden" value="Новый пароль" {...register('form')} />
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
            {formState.errors.password?.message ? <Error>{String(formState.errors.password?.message)}</Error> : null}
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
            {formState.errors.repeat?.message ? <Error>{String(formState.errors.repeat?.message)}</Error> : null}
          </div>
        </label>
        <ButtonSubmit className="btn btn-primary btn-lg btn-fill" load={loadingValue}>
          Восстановить
        </ButtonSubmit>
      </form>
    </>
  )
}
