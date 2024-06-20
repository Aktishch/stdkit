import { useState } from 'react'
import { SectionDefault } from '@ui/SectionDefault'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Title } from '@ui/Title'
import { UserAva } from '@ui/UserAva'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import { InputDefault } from '@components/InputDefault'
import { InputText } from '@components/InputText'
import { InputTel } from '@components/InputTel'
import { Sidebar } from '@views/lk/components/Sidebar'
import { SidebarButton } from '@views/lk/components/SidebarButton'
import { SidebarExit } from '@views/lk/components/SidebarExit'
import { AvatarUploader } from '@views/lk/components/AvatarUploader'

export const TutorSettings = () => {
  const [image, setImage] = useState<string | File>()

  return (
    <SectionDefault>
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <Sidebar>
          <div className="flex items-center mb-6">
            <UserAva className="mr-4" />
            <div className="flex flex-col overflow-hidden">
              <UserName>Константинов Константин</UserName>
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
        </div>
      </div>
    </SectionDefault>
  )
}
