import { Title, InputTitle, InputError, InputPassword } from '@components'

export const Password = () => {
  return (
    <>
      <Title className="mb-6 sm:mb-10">Изменить пароль</Title>
      <form className="flex flex-col gap-6" action="">
        <input type="hidden" value="Изменить пароль" name="theme" />
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
        <button
          className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
          type="submit"
        >
          Сохранить изменения
        </button>
      </form>
      <ul className="flex flex-col gap-2 mt-6 sm:gap-3 text-red sm:mt-10">
        <li className="font-normal text-xs/tight sm:text-sm/tight">
          Пароль должен быть не менее <b>8 символов длиной</b>
        </li>
        <li className="font-normal text-xs/tight sm:text-sm/tight">
          Пароль должен содержать <b>цифры (0-9)</b>
        </li>
        <li className="font-normal text-xs/tight sm:text-sm/tight">
          Пароль должен содержать{' '}
          <b>латинские символы нижнего регистра (a-z)</b>
        </li>
      </ul>
    </>
  )
}
