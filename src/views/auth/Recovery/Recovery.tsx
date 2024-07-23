import { InputTitle, InputError } from '@components'
import { Title, Subtitle } from '@views/auth/components'

export const Recovery = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>
        Введите e-mail и мы вышлем <br />
        код для смены пароля
      </Subtitle>
      <form className="flex flex-col gap-6" action="/code">
        <input type="hidden" value="Восстановление пароля" name="auth" />
        <label>
          <InputTitle>E-Mail</InputTitle>
          <div className="relative">
            <input
              className="input input-primary input-lg"
              type="email"
              name="login"
            />
            <InputError>Введите e-mail</InputError>
          </div>
        </label>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Восстановить
        </button>
      </form>
    </>
  )
}
