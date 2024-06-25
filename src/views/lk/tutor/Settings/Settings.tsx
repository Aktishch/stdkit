import { useState } from 'react'
import { Button } from '@ui/Button'
import { Form } from '@ui/Form/Form'
import { Input } from '@ui/Form/Input'
import { InputDefault } from '@components/Input/InputDefault'
import { InputText } from '@components/Input/InputText'
import { InputTel } from '@components/Input/InputTel'
import { Title } from '@views/lk/components/Title'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { AvatarUploader } from '@views/lk/components/Avatar/AvatarUploader'

export const Settings = () => {
  const [image, setImage] = useState<string | File>()

  return (
    <ContentElement>
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
          <InputTel placeholder="Телефон" error="Введите телефон" name="tel" />
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
    </ContentElement>
  )
}
