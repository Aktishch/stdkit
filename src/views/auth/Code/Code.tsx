import { InputTitle, InputError } from '@components'
import { Title, Subtitle } from '@views/auth/components'

export const Code = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>
        На ваш e-mail отправили код подтверждения,{' '}
        <br className="hidden sm:block" />
        введите его нижу, чтобы изменить пароль
      </Subtitle>
      <form className="flex flex-col gap-6" action="">
        <input type="hidden" value="Восстановление пароля" name="auth" />
        <label>
          <InputTitle>Код</InputTitle>
          <div className="relative">
            <input
              className="input input-primary input-lg"
              type="email"
              name="login"
            />
            <InputError>Введите код</InputError>
          </div>
        </label>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Восстановить
        </button>
      </form>
    </>
  )
}
