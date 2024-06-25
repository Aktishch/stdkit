import { useState } from 'react'
import { Button } from '@ui/Button'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Input } from '@ui/Form/Input'
import { Form } from '@ui/Form/Form'
import { InputDefault } from '@components/Input/InputDefault'
import { InputText } from '@components/Input/InputText'
import { InputTel } from '@components/Input/InputTel'
import { InputNumber } from '@components/Input/InputNumber'
import { InputPassword } from '@components/Input/InputPassword'
import { Select } from '@components/Select'
import { Title } from '@views/lk/components/Title'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { DatesForm } from '@views/lk/components/Dates/DatesForm'
import { DatesItems } from '@views/lk/components/Dates/DatesItems'
import { DatesInput } from '@views/lk/components/Dates/DatesInput'
import { DatesTextarea } from '@views/lk/components/Dates/DatesTextarea'
import { AvatarUploader } from '@views/lk/components/Avatar/AvatarUploader'

export const Detail = () => {
  const [image, setImage] = useState<string | File>()

  return (
    <>
      <ContentElement>
        <DatesForm className="mb-7 sm:mb-10" action="">
          <Input type="hidden" value="Прохождение практики" name="theme" />
          <Title>Дата прохождения</Title>
          <DatesItems>
            <DatesInput defaultValue="2013-01-08" name="data-start" />
            <DatesInput defaultValue="2013-01-08" name="data-end" />
          </DatesItems>
          <Title>От куратора</Title>
          <DatesTextarea />
          <DatesItems>
            <Button type="submit">Сохранить</Button>
            <Button color="grey" variant="fade" type="reset">
              Отмена
            </Button>
          </DatesItems>
        </DatesForm>
        <Title className="mb-6 sm:mb-9">Характеристика студента</Title>
        <Form className="gap-6 sm:gap-9" action="">
          <Input type="hidden" value="Личные данные" name="theme" />
          <div className="grid grid-cols-4 gap-2">
            <div className="relative flex flex-col items-center justify-center h-32 p-4 text-black rounded-lg cursor-pointer bg-grey text-opacity-60">
              <span className="text-sm font-normal leading-none">Цыпа</span>
            </div>
          </div>
          <Title>Личные данные</Title>
          <AvatarUploader
            value={image}
            onChange={setImage}
            onRemove={(): void => setImage(undefined)}
          />
          <div className="flex flex-col gap-6">
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
          <Title>Университет</Title>
          <div className="flex flex-col gap-6">
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
          <Title>Пароль</Title>
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
          </div>
          <Button className="w-full max-w-60" type="submit">
            Сохранить изменения
          </Button>
        </Form>
      </ContentElement>
      <ContentElement>
        <div className="flex flex-col gap-6 px-8 py-10 bg-grey rounded-3xl">
          <Title>Хронология</Title>
          <div className="flex flex-col gap-5 px-4 pt-5 pb-8 bg-white rounded-2xl">
            <div className="flex items-center justify-center gap-2 pb-5 border-b border-solid border-grey">
              <span className="text-base font-semibold leading-none">
                21 май 2023 - 28 май 2023
              </span>
              <span className="text-base font-normal leading-none text-red">
                Завершена
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center">
                <Pack
                  className="w-6 mr-2 rounded-full shrink-0 bg-gray"
                  size="box"
                >
                  <Picture
                    className="image"
                    webp="/img/pictures/user.webp"
                    src="/img/pictures/user.jpg"
                    loading="eager"
                  />
                </Pack>
                <span className="text-base font-normal leading-none opacity-60">
                  Щербаков Иван
                </span>
              </div>
              <span className="text-base font-normal leading-none opacity-60">
                Куратор
              </span>
            </div>
            <div className="flex items-center rounded-lg bg-green-light h-[52px] px-4">
              <Picture
                className="mr-2 text-base icon"
                src="/img/pictures/chicken.svg"
                loading="eager"
              />
              <span className="text-base font-normal leading-none">
                Красавчик
              </span>
            </div>
            <ul className="flex flex-col gap-5 pb-5 border-solid border-grey">
              <li className="flex items-center justify-between gap-2">
                <span className="text-base font-normal leading-none">
                  Количество задач
                </span>
                <span className="text-base font-semibold leading-none">21</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentElement>
    </>
  )
}
