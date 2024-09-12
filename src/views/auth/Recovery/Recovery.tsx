import { LabelName } from '@components'
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
        <input type="hidden" value="Восстановление пароля" name="theme" />
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
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Восстановить
        </button>
      </form>
    </>
  )
}
