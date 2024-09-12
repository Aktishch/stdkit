import { LabelName, InputPassword } from '@components'
import { ButtonUnderline } from '@views/auth/components'

export const Login = () => {
  return (
    <>
      <form className="flex flex-col gap-6" action="/lk">
        <input type="hidden" value="Авторизация" name="theme" />
        <label>
          <LabelName>Логин</LabelName>
          <div className="relative">
            <input
              className="input input-primary input-lg dark:input-fade"
              type="text"
              name="login"
            />
            <span className="error">Введите логин</span>
          </div>
        </label>
        <label>
          <LabelName>Пароль</LabelName>
          <div className="relative">
            <InputPassword
              className="input input-primary input-lg dark:input-fade"
              name="password"
            />
            <span className="error">Введите пароль</span>
          </div>
        </label>
        <div className="flex items-center justify-center">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Забыли пароль?
          </span>
          <ButtonUnderline to="/recovery">Восстановить</ButtonUnderline>
        </div>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Вход
        </button>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Нет аккаунта?
        </span>
        <ButtonUnderline to="/registration">Зарегистрируйтесь</ButtonUnderline>
      </div>
    </>
  )
}
