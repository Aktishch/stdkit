import { LabelName, InputPassword, InputText, InputTel } from '@components'
import { ButtonUnderline } from '@views/auth/components'

export const Registration = () => {
  return (
    <>
      <form className="flex flex-col gap-6" action="/">
        <input type="hidden" value="Регистрация" name="theme" />
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
          <LabelName>Фамилия</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="surname"
            />
            <span className="error">Введите фамилию</span>
          </div>
        </label>
        <label>
          <LabelName>Имя</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="name"
            />
            <span className="error">Введите имя</span>
          </div>
        </label>
        <label>
          <LabelName>Отчество</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="father-name"
            />
            <span className="error">Введите отчество</span>
          </div>
        </label>
        <label>
          <LabelName>Должность</LabelName>
          <div className="relative">
            <InputText
              className="input input-primary input-lg dark:input-fade"
              name="work"
            />
            <span className="error">Введите должность</span>
          </div>
        </label>
        <label>
          <LabelName>Телефон</LabelName>
          <div className="relative">
            <InputTel
              className="input input-primary input-lg dark:input-fade"
              name="tel"
            />
            <span className="error">Введите телефон</span>
          </div>
        </label>
        <label>
          <LabelName>E-Mail</LabelName>
          <div className="relative">
            <input
              className="input input-primary input-lg dark:input-fade"
              type="email"
              name="email"
            />
            <span className="error">Введите e-mail</span>
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
        <label>
          <LabelName>Повторите пароль</LabelName>
          <div className="relative">
            <InputPassword
              className="input input-primary input-lg dark:input-fade"
              name="new-password"
            />
            <span className="error">Повторите пароль</span>
          </div>
        </label>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Есть аккаунт?
        </span>
        <ButtonUnderline to="/">Войти</ButtonUnderline>
      </div>
    </>
  )
}
