import { useToggle } from '@hooks/useToggle'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Error } from '@ui/Error'
import { InputDefault } from '@components/InputDefault'
import { InputPassword } from '@components/InputPassword'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'
import { LoginToggle } from '@views/auth/Login/components/LoginToggle'

export const Login = () => {
  const { value, on, off } = useToggle({ status: false })

  // const [data, setData] = useState({
  //   login: '',
  //   password: '',
  // })

  // const [error, setError] = useState({
  //   login: '',
  //   password: '',
  // })

  // const [validate, setValidate] = useState({
  //   login: false,
  //   password: false,
  // })

  // const setState = ({
  //   name,
  //   text,
  //   status,
  // }: {
  //   name: string
  //   text: string
  //   status: boolean
  // }): void => {
  //   setError((prevState) => ({
  //     ...prevState,
  //     [name]: text,
  //   }))

  //   setValidate((prevState) => ({
  //     ...prevState,
  //     [name]: status,
  //   }))
  // }

  // const inputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
  //   const { name, value } = event.target as HTMLInputElement

  //   setData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }))

  //   switch (name) {
  //     case 'login': {
  //       switch (value.length === 0) {
  //         case true: {
  //           setState({ name: name, text: 'Введите логин', status: false })
  //           break
  //         }

  //         case false: {
  //           setState({ name: name, text: '', status: true })
  //           break
  //         }
  //       }

  //       break
  //     }

  //     case 'password': {
  //       switch (value.length < 8) {
  //         case true: {
  //           setState({
  //             name: name,
  //             text: 'Минимальная длинна пароля 8 символов',
  //             status: false,
  //           })
  //           break
  //         }

  //         case false: {
  //           setState({ name: name, text: '', status: true })
  //           break
  //         }
  //       }

  //       break
  //     }
  //   }
  // }

  // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   const validation: boolean = Object.values(validate).every(
  //     (item) => item === true
  //   )

  //   if (!validation) event.preventDefault()
  // }

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-6" action="/lk-tutor">
          <Input
            type="hidden"
            value={`${value ? 'Куратор' : 'Студент'}`}
            name="theme"
          />
          <div className="flex items-center justify-between border border-gray border-solid rounded-lg h-[52px] overflow-hidden">
            <LoginToggle
              className={`${!value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={off}
            >
              Студент
            </LoginToggle>
            <LoginToggle
              className={`${value ? 'bg-primary text-white font-semibold pointer-events-none' : 'font-normal'}`}
              onClick={on}
            >
              Куратор
            </LoginToggle>
          </div>
          <InputDefault placeholder="Логин" name="login">
            <Error>Введите логин</Error>
          </InputDefault>
          <InputPassword placeholder="Пароль" name="password">
            <Error>Минимальная длинна пароля 8 символов</Error>
          </InputPassword>
          <div className="flex">
            <AuthLink to="/recovery">
              Забыл пароль? А голову свою не забыл?
            </AuthLink>
          </div>
          <Button type="submit">
            <Waved />
            Вход
          </Button>
        </Form>
        {value ? (
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
    </AuthSection>
  )
}
