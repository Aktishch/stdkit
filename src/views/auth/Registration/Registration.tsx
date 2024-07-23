import {
  InputTitle,
  InputError,
  InputPassword,
  InputText,
  InputTel,
} from '@components'
import { LinkUnderline } from '@views/auth/components'

export const Registration = () => {
  return (
    <form className="flex flex-col gap-6" action="/">
      <input type="hidden" value="Регистрация" name="auth" />
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
        <InputTitle>Фамилия</InputTitle>
        <div className="relative">
          <InputText className="input input-primary input-lg" name="surname" />
          <InputError>Введите фамилию</InputError>
        </div>
      </label>
      <label>
        <InputTitle>Имя</InputTitle>
        <div className="relative">
          <InputText className="input input-primary input-lg" name="name" />
          <InputError>Введите имя</InputError>
        </div>
      </label>
      <label>
        <InputTitle>Отчество</InputTitle>
        <div className="relative">
          <InputText
            className="input input-primary input-lg"
            name="father-name"
          />
          <InputError>Введите отчество</InputError>
        </div>
      </label>
      <label>
        <InputTitle>Должность</InputTitle>
        <div className="relative">
          <InputText className="input input-primary input-lg" name="work" />
          <InputError>Введите должность</InputError>
        </div>
      </label>
      <label>
        <InputTitle>Телефон</InputTitle>
        <div className="relative">
          <InputTel className="input input-primary input-lg" name="tel" />
          <InputError>Введите телефон</InputError>
        </div>
      </label>
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
            name="password"
          />
          <InputError>Повторите пароль</InputError>
        </div>
      </label>
      <button className="btn btn-primary btn-lg btn-fill" type="submit">
        Зарегистрироваться
      </button>
      <div className="flex items-center justify-center">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Есть аккаунт?
        </span>
        <LinkUnderline to="/">Войти</LinkUnderline>
      </div>
    </form>
  )
}
