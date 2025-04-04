import { ButtonSubmit, Error, InputNumber, LabelName } from '@components'
import { useToggle } from '@hooks'
import { DataForm, TSXComponent } from '@utils'
import { ButtonUnderline, Subtitle, Title } from '@views/auth/components'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Code = (): TSXComponent => {
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
        На ваш e-mail отправили код подтверждения, <br className="hidden sm:block" />
        введите его ниже, чтобы изменить пароль
      </Subtitle>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
        <input type="hidden" value="Код подтверждения" {...register('form')} />
        <label>
          <LabelName>Код</LabelName>
          <div className="relative">
            <InputNumber
              className={`input input-primary input-lg dark:input-fade ${formState.errors.code?.message ? 'input-error' : ''}`}
              maxLength={4}
              {...register('code', {
                required: 'Введите код',
                minLength: {
                  value: 4,
                  message: 'Минимальная длинна кода 4 символа',
                },
              })}
            />
            {formState.errors.code?.message ? <Error>{String(formState.errors.code?.message)}</Error> : null}
          </div>
        </label>
        <ButtonSubmit className="btn btn-primary btn-lg btn-fill" load={loadingValue}>
          Восстановить
        </ButtonSubmit>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">Не пришел код?</span>
        <ButtonUnderline as="a" href="">
          Получить повторно
        </ButtonUnderline>
      </div>
    </>
  )
}
