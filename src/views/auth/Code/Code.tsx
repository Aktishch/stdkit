import { SubmitHandler, useForm } from 'react-hook-form'
import { DataForm } from '@utils'
import { useToggle } from '@hooks'
import { LabelName, InputNumber, ButtonSubmit } from '@components'
import { Title, Subtitle, ButtonUnderline } from '@views/auth/components'

export const Code = () => {
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
      <Title>Восстановление пароля</Title>
      <Subtitle>
        На ваш e-mail отправили код подтверждения,{' '}
        <br className="hidden sm:block" />
        введите его нижу, чтобы изменить пароль
      </Subtitle>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type="hidden" value="Код подтверждения" {...register('form')} />
        <label>
          <LabelName>Код</LabelName>
          <div className="relative">
            <InputNumber
              className={`input input-primary input-lg dark:input-fade ${formState.errors.code?.message ? 'input-error' : null}`}
              maxLength={4}
              {...register('code', {
                required: 'Введите код',
                minLength: {
                  value: 4,
                  message: 'Минимальная длинна кода 4 символа',
                },
              })}
            />
            {formState.errors.code?.message ? (
              <span className="error">
                {String(formState.errors.code?.message)}
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
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Не пришел код?
        </span>
        <ButtonUnderline as="a" href="">
          Получить повторно
        </ButtonUnderline>
      </div>
    </>
  )
}
