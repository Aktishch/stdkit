import { useToggle } from '@hooks/useToggle'
import { SectionScreen } from '@ui/SectionScreen'
import { GradientBg } from '@ui/GradientBg'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/InputDefault'
import { InputPassword } from '@components/InputPassword'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'
import { LoginToggle } from '@views/auth/Login/components/LoginToggle'

export const Login = () => {
  const [loginValue, loginOn, loginOff] = useToggle()

  return (
    <SectionScreen>
      <GradientBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-6" action="/lk-tutor/">
          <Input
            type="hidden"
            value={`${loginValue ? 'Куратор' : 'Студент'}`}
            name="theme"
          />
          <div className="flex items-center justify-between border border-gray border-solid rounded-lg h-[52px] overflow-hidden">
            <LoginToggle
              className={`${!loginValue ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={loginOff}
            >
              Студент
            </LoginToggle>
            <LoginToggle
              className={`${loginValue ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={loginOn}
            >
              Куратор
            </LoginToggle>
          </div>
          <InputDefault
            placeholder="Логин"
            error="Введите логин"
            name="login"
          />
          <InputPassword
            placeholder="Пароль"
            error="Минимальная длинна пароля 8 символов"
            name="password"
          />
          <div className="flex">
            <AuthLink to="/recovery">
              Забыл пароль? А голову свою не забыл?
            </AuthLink>
          </div>
          <Button type="submit">Вход</Button>
        </Form>
        {loginValue ? (
          <div className="flex items-center justify-center mt-8">
            <span className="mr-2 text-sm font-normal sm:text-base">
              Нет аккаунта?
            </span>
            <AuthLink to="/registration">Зарегистрируйтесь</AuthLink>
          </div>
        ) : (
          ''
        )}
      </AuthContent>
    </SectionScreen>
  )
}
