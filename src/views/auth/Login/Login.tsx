import { Screen } from '@ui/Screen'
import { Gradient } from '@ui/Gradient'
import { Button } from '@ui/Button'
import { InputDefault } from '@components/Input/InputDefault'
import { InputPassword } from '@components/Input/InputPassword'
import { Content } from '@views/auth/components/Content'
import { Logo } from '@views/auth/components/Logo'
import { BorderButton } from '@views/auth/components/BorderButton'
import { Toggle } from '@views/auth/Login/components/Toggle'
import { useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  login: string
  password: string
}

export const Login = () => {
  const { mode } = useParams()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    // console.log(import.meta.env.VITE_API_ROOT_URL)
    console.log(data)
  }

  return (
    <Screen>
      <Gradient />
      <Content>
        <Logo />
        <form
          className="gap-6 flex flex-col"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex items-center border border-gray border-solid rounded-lg h-[52px] overflow-hidden">
            <Toggle mode="student">Студент</Toggle>
            <Toggle mode="mentor">Куратор</Toggle>
          </div>

          <InputDefault
            placeholder="Логин"
            error="Введите логин"
            {...register('login')}
          />
          <InputPassword
            placeholder="Пароль"
            error="Минимальная длинна пароля 8 символов"
            {...register('password')}
          />
          <div className="flex">
            <BorderButton to="/recovery">
              Забыл пароль? А голову свою не забыл?
            </BorderButton>
          </div>
          <Button type="submit">Вход</Button>
        </form>
        {mode === 'student' && (
          <div className="flex items-center justify-center mt-8">
            <span className="mr-2 text-sm font-normal sm:text-base">
              Нет аккаунта?
            </span>
            <BorderButton to="/registration">Зарегистрируйтесь</BorderButton>
          </div>
        )}
      </Content>
    </Screen>
  )
}
