import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Title } from '@ui/Title'
import { UserAva } from '@ui/UserAva'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import { InputPassword } from '@components/InputPassword'
import { Sidebar } from '@views/lk/components/Sidebar'
import { SidebarButton } from '@views/lk/components/SidebarButton'
import { SidebarExit } from '@views/lk/components/SidebarExit'

export const TutorPassword = () => {
  return (
    <section className="container flex-grow">
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <Sidebar>
          <div className="flex items-center mb-6">
            <UserAva className="mr-4" />
            <div className="flex flex-col">
              <UserName>Щербаков Иван</UserName>
              <UserPost>Куратор, веб-дизайн</UserPost>
            </div>
          </div>
          <nav className="flex flex-col">
            <SidebarButton id="settings" to="/lk-tutor/settings">
              Настройки профиля
            </SidebarButton>
            <SidebarButton id="lock" to="/lk-tutor/password">
              Изменить пароль
            </SidebarButton>
            <SidebarExit />
          </nav>
        </Sidebar>
        <div className="w-full lg:max-w-[420px]">
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
          <ul className="flex flex-col gap-3 text-red mt-7 sm:mt-10">
            <li className="text-sm font-normal leading-4">
              Пароль должен быть не менее{' '}
              <span className="font-semibold">8 символов длиной</span>
            </li>
            <li className="text-sm font-normal leading-4">
              Пароль должен содержать{' '}
              <span className="font-semibold">цифры (0-9)</span>
            </li>
            <li className="text-sm font-normal leading-4">
              Пароль должен содержать{' '}
              <span className="font-semibold">
                латинские символы нижнего регистра (a-z)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
