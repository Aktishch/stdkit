import { LabelName, InputPassword } from '@components'
import { Title, Subtitle } from '@views/auth/components'

export const Password = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>Придумайте новый пароль </Subtitle>
      <form className="flex flex-col gap-6" action="/">
        <input type="hidden" value="Новый пароль" name="theme" />
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
          Восстановить
        </button>
      </form>
    </>
  )
}
