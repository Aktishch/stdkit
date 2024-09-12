import { Title, LabelName, InputPassword } from '@components'

export const Password = () => {
  return (
    <>
      <Title className="mb-6 sm:mb-10">Изменить пароль</Title>
      <form className="flex flex-col gap-6" action="">
        <input type="hidden" value="Изменить пароль" name="theme" />
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
        <button
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          type="submit"
        >
          Сохранить изменения
        </button>
      </form>
      <ul className="flex flex-col gap-2 mt-6 font-normal sm:gap-3 text-red sm:mt-10 text-xs/tight sm:text-sm/tight">
        <li>
          Пароль должен быть не менее <b>8 символов длиной</b>
        </li>
        <li>
          Пароль должен содержать <b>цифры (0-9)</b>
        </li>
        <li>
          Пароль должен содержать{' '}
          <b>латинские символы нижнего регистра (a-z)</b>
        </li>
      </ul>
    </>
  )
}
