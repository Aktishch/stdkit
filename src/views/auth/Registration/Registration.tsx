import { SectionScreen } from '@ui/SectionScreen'
import { GradientBg } from '@ui/GradientBg'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Chapter } from '@ui/Chapter'
import { InputDefault } from '@components/InputDefault'
import { InputText } from '@components/InputText'
import { InputTel } from '@components/InputTel'
import { InputNumber } from '@components/InputNumber'
import { InputPassword } from '@components/InputPassword'
import { Select } from '@components/Select'
import { AuthContent } from '@views/auth/components/AuthContent'
import { AuthLogo } from '@views/auth/components/AuthLogo'
import { AuthLink } from '@views/auth/components/AuthLink'

export const Registration = () => {
  return (
    <SectionScreen>
      <GradientBg />
      <AuthContent>
        <AuthLogo />
        <Form className="gap-7 md:gap-10" action="/">
          <Input type="hidden" value="Регистрация" name="theme" />
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/chicken.svg">Личная информация</Chapter>
            <InputDefault
              placeholder="Логин"
              error="Введите логин"
              name="login"
            />
            <InputText
              placeholder="Фамилия"
              error="Введите фамилию"
              name="surname"
            />
            <InputText placeholder="Имя" error="Введите имя" name="name" />
            <InputText
              placeholder="Отчество"
              error="Введите отчество"
              name="father-name"
            />
            <Select
              placeholder="Вид деятельности"
              error="Укажите вид деятельности"
              name="activity"
            >
              <option value="empty" hidden></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            <InputTel
              placeholder="Телефон"
              error="Введите телефон"
              name="tel"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/school.svg">Университет</Chapter>
            <InputDefault
              placeholder="Полное название ВУЗа"
              error="Укажите ВУЗ"
              name="university"
            />
            <InputDefault
              placeholder="Факультет"
              error="Укажите факультет"
              name="faculty"
            />
            <InputNumber
              placeholder="Курс"
              error="Укажите курс"
              maxLength={1}
              name="course"
            />
            <InputDefault
              placeholder="Группа"
              error="Укажите группу"
              name="group"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Chapter src="/img/pictures/locked.svg">Пароль</Chapter>
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
          </div>
          <Button type="submit">Зарегистрироваться</Button>
        </Form>
        <div className="flex items-center justify-center mt-8">
          <span className="mr-2 text-sm font-normal sm:text-base">
            Есть аккаунт?
          </span>
          <AuthLink to="/">Войти</AuthLink>
        </div>
      </AuthContent>
    </SectionScreen>
  )
}
