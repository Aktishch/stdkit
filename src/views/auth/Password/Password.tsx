import { InputPassword, InputTitle, InputError } from '@components'
import { Title, Subtitle } from '@views/auth/components'

export const Password = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>Придумайте новый пароль </Subtitle>
      <form className="flex flex-col gap-6" action="/">
        <input type="hidden" value="Новый пароль" name="theme" />
        <label>
          <InputTitle>Пароль</InputTitle>
          <div className="relative">
            <InputPassword
              className="input input-primary input-lg"
              name="password"
            />
            <InputError>Введите пароль</InputError>
          </div>
        </label>
        <label>
          <InputTitle>Повторите пароль</InputTitle>
          <div className="relative">
            <InputPassword
              className="input input-primary input-lg"
              name="new-password"
            />
            <InputError>Повторите пароль</InputError>
          </div>
        </label>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Восстановить
        </button>
      </form>
    </>
  )
}
