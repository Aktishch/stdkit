import { Button } from '@ui/Button'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'
import { InputPassword } from '@components/Input/InputPassword'
import { Title } from '@views/lk/components/Title'
import { ContentElement } from '@views/lk/components/Content/ContentElement'

export const Password = () => {
  return (
    <ContentElement>
      <Title className="mb-6 sm:mb-9">Изменить пароль</Title>
      <Form action="">
        <Input type="hidden" value="Изменить пароль" name="theme" />
        <div className="flex flex-col gap-6">
          <InputPassword
            placeholder="Пароль"
            error="Минимальная длинна пароля 8 символов"
            name="password"
          />
          <InputPassword
            placeholder="Повторите пароль"
            error="Минимальная длинна пароля 8 символов"
            name="password-replay"
          />
          <Button className="w-full max-w-60" type="submit">
            Сохранить изменения
          </Button>
        </div>
      </Form>
      <ul className="flex flex-col gap-1 mt-6 sm:gap-3 text-red sm:mt-10">
        <li className="text-xs font-normal leading-normal sm:text-sm">
          Пароль должен быть не менее{' '}
          <span className="font-semibold">8 символов длиной</span>
        </li>
        <li className="text-xs font-normal leading-normal sm:text-sm">
          Пароль должен содержать{' '}
          <span className="font-semibold">цифры (0-9)</span>
        </li>
        <li className="text-xs font-normal leading-normal sm:text-sm">
          Пароль должен содержать{' '}
          <span className="font-semibold">
            латинские символы нижнего регистра (a-z)
          </span>
        </li>
      </ul>
    </ContentElement>
  )
}
