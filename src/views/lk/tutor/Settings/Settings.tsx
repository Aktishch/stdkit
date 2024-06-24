import { useState } from 'react'
import { Button } from '@ui/Button'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'
import { InputDefault } from '@components/Input/InputDefault'
import { InputText } from '@components/Input/InputText'
import { InputTel } from '@components/Input/InputTel'
import { Section } from '@views/lk/components/Section'
import { Title } from '@views/lk/components/Title'
import { Content } from '@views/lk/components/Content/Content'
import { ContentPrimary } from '@views/lk/components/Content/ContentPrimary'
import { Sidebar } from '@views/lk/components/Sidebar/Sidebar'
import { SidebarButton } from '@views/lk/components/Sidebar/SidebarButton'
import { SidebarExit } from '@views/lk/components/Sidebar/SidebarExit'
import { AvatarUploader } from '@views/lk/components/Avatar/AvatarUploader'

export const Settings = () => {
  const [image, setImage] = useState<string | File>()

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
          <Title className="mb-6 sm:mb-9">Личные данные</Title>
          <Form action="">
            <Input type="hidden" value="Личные данные" name="theme" />
            <AvatarUploader
              className="mb-6 sm:mb-9"
              value={image}
              onChange={setImage}
              onRemove={(): void => setImage(undefined)}
            />
            <div className="flex flex-col gap-6">
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
              <InputText
                placeholder="Должность"
                error="Введите должность"
                name="work"
              />
              <InputTel
                placeholder="Телефон"
                error="Введите телефон"
                name="tel"
              />
              <InputDefault
                type="email"
                placeholder="E-Mail"
                error="Некорректный адрес"
                name="email"
              />
              <Button className="w-full max-w-60" type="submit">
                Сохранить изменения
              </Button>
            </div>
          </Form>
        </ContentPrimary>
      </Content>
    </Section>
  )
}
