import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Error } from '@ui/Error'
import { Chapter } from '@ui/Chapter'
import { InputDefault } from '@components/InputDefault'
import { InputText } from '@components/InputText'
import { InputTel } from '@components/InputTel'
import { InputNumber } from '@components/InputNumber'
import { InputPassword } from '@components/InputPassword'
import { Select } from '@components/Select'
import { Waved } from '@components/Waved'
import { AuthSection } from '@views/auth/components/AuthSection'
import { AuthBg } from '@views/auth/components/AuthBg'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'

export const Registration = () => {
  const options = [
    {
      value: 'empty',
      text: '',
    },
    {
      value: '1',
      text: '1',
    },
    {
      value: '2',
      text: '2',
    },
    {
      value: '3',
      text: '3',
    },
  ]

  return (
    <AuthSection>
      <AuthBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-7 md:gap-10" action="/">
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/chicken.svg">Личная информация</Chapter>
            <InputDefault placeholder="Логин" name="login">
              <Error>Введите логин</Error>
            </InputDefault>
            <InputText placeholder="Фамилия" name="surname">
              <Error>Введите фамилию</Error>
            </InputText>
            <InputText placeholder="Имя" name="name">
              <Error>Введите имя</Error>
            </InputText>
            <InputText placeholder="Отчество" name="father-name">
              <Error>Введите отчество</Error>
            </InputText>
            <Select
              placeholder="Вид деятельности"
              name="activity"
              options={options}
            >
              <Error>Укажите вид деятельности</Error>
            </Select>
            <InputTel placeholder="Телефон" name="tel">
              <Error>Введите телефон</Error>
            </InputTel>
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/school.svg">Университет</Chapter>
            <InputDefault placeholder="Полное название ВУЗа" name="university">
              <Error>Укажите ВУЗ</Error>
            </InputDefault>
            <InputDefault placeholder="Факультет" name="faculty">
              <Error>Укажите факультет</Error>
            </InputDefault>
            <InputNumber placeholder="Курс" maxLength={1} name="course">
              <Error>Укажите курс</Error>
            </InputNumber>
            <InputDefault placeholder="Группа" name="group">
              <Error>Укажите группу</Error>
            </InputDefault>
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/locked.svg">Пароль</Chapter>
            <InputPassword placeholder="Пароль" name="password">
              <Error>Минимальная длинна пароля 8 символов</Error>
            </InputPassword>
            <InputPassword
              placeholder="Повторите пароль"
              name="password-replay"
            >
              <Error>Минимальная длинна пароля 8 символов</Error>
            </InputPassword>
          </div>
          <Button type="submit">
            <Waved />
            Зарегистрироваться
          </Button>
        </Form>
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Есть аккаунт?
          </span>
          <AuthLink to="/">Войти</AuthLink>
        </div>
      </AuthContent>
    </AuthSection>
  )
}
