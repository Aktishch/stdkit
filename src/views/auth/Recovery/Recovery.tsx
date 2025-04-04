import { ButtonSubmit, Error, LabelName } from '@components'
import { useToggle } from '@hooks'
import { DataForm, TSXComponent } from '@utils'
import { Subtitle, Title } from '@views/auth/components'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Recovery = (): TSXComponent => {
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
      <Subtitle>
        Введите e-mail и мы вышлем <br />
        код для смены пароля
      </Subtitle>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
        <input type="hidden" value="Восстановление пароля" {...register('form')} />
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
            {formState.errors.email?.message ? <Error>{String(formState.errors.email?.message)}</Error> : null}
          </div>
        </label>
        <ButtonSubmit className="btn btn-primary btn-lg btn-fill" load={loadingValue}>
          Восстановить
        </ButtonSubmit>
      </form>
    </>
  )
}
