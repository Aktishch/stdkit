import { LabelName, InputNumber } from '@components'
import { Title, Subtitle, ButtonUnderline } from '@views/auth/components'

export const Code = () => {
  return (
    <>
      <Title>Восстановление пароля</Title>
      <Subtitle>
        На ваш e-mail отправили код подтверждения,{' '}
        <br className="hidden sm:block" />
        введите его нижу, чтобы изменить пароль
      </Subtitle>
      <form className="flex flex-col gap-6" action="/password">
        <input type="hidden" value="Код подтверждения" name="theme" />
        <label>
          <LabelName>Код</LabelName>
          <div className="relative">
            <InputNumber
              className="input input-primary input-lg dark:input-fade"
              name="code"
            />
            <span className="error">Введите код</span>
          </div>
        </label>
        <button className="btn btn-primary btn-lg btn-fill" type="submit">
          Восстановить
        </button>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="mr-2 text-sm font-normal sm:text-base">
          Не пришел код?
        </span>
        <ButtonUnderline as="a" href="">
          Получить повторно
        </ButtonUnderline>
      </div>
    </>
  )
}
