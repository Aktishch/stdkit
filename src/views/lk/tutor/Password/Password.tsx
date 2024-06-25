import { Button } from '@ui/Button'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'
import { InputPassword } from '@components/Input/InputPassword'
import { Section } from '@views/lk/components/Section'
import { Title } from '@views/lk/components/Title'
import { Content } from '@views/lk/components/Content/Content'
import { ContentPrimary } from '@views/lk/components/Content/ContentPrimary'
import { Sidebar } from '@views/lk/components/Sidebar/Sidebar'
import { SidebarButton } from '@views/lk/components/Sidebar/SidebarButton'
import { SidebarExit } from '@views/lk/components/Sidebar/SidebarExit'

export const Password = () => {
  return (
    <Section>
      <Content>
        <Sidebar
          webp="/img/pictures/user.webp"
          src="/img/pictures/user.jpg"
          userName="Константинов Константин"
          userPost="Куратор, веб-дизайн"
        >
          <SidebarButton id="settings" to="/lk-tutor/settings">
            Настройки профиля
          </SidebarButton>
          <SidebarButton id="lock" to="/lk-tutor/password">
            Изменить пароль
          </SidebarButton>
          <SidebarExit />
        </Sidebar>
        <ContentPrimary>
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
        </ContentPrimary>
      </Content>
    </Section>
  )
}
