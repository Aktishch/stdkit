import { InputTitle, InputError, InputPassword } from '@components'
import { LinkUnderline } from '@views/auth/components'

export const Login = () => {
  return (
    <form className="flex flex-col gap-6" action="">
      <input type="hidden" value="Авторизация" name="auth" />
      <label>
        <InputTitle>Логин</InputTitle>
        <div className="relative">
          <input
            className="input input-primary input-lg"
            type="text"
            name="login"
          />
          <InputError>Введите логин</InputError>
        </div>
      </label>
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
      <div className="flex items-center justify-center">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Забыли пароль?
        </span>
        <LinkUnderline to="/recovery">Восстановить</LinkUnderline>
      </div>
      <button className="btn btn-primary btn-lg btn-fill" type="submit">
        Вход
      </button>
      <div className="flex items-center justify-center">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Нет аккаунта?
        </span>
        <LinkUnderline to="/registration">Зарегистрируйтесь</LinkUnderline>
      </div>
    </form>
  )
}
