import { useState } from 'react'
import { Button } from '@ui/Button'
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
import { Toggle } from '@views/lk/tutor/Students/Detail/components/Toggle'
import { Chronology } from '@views/lk/tutor/Students/Detail/components/Chronology'

const data = [
  {
    dateStart: '21 май 2023',
    dateEnd: '28 май 2023',
    tutor: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Щербаков Иван',
    },
    student: {
      status: true,
      src: '/img/pictures/chicken.svg',
      text: 'Красавчик',
    },
    tasks: {
      quantity: 21,
      overdue: 1,
    },
    thanks: 5,
    comment: 'Почему же, почему же, дождик капает по лужам',
  },
  {
    dateStart: '21 май 2023',
    dateEnd: '28 май 2023',
    tutor: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Щербаков Иван',
    },
    student: {
      status: false,
      src: '/img/pictures/chicken.svg',
      text: 'Ну такое',
    },
    tasks: {
      quantity: 21,
      overdue: 1,
    },
    thanks: 5,
    comment: 'Почему же, почему же, дождик капает по лужам',
  },
]

export const Detail = () => {
  const [toggleValue, setToggleValue] = useState<string>('Цыпа')
  const [image, setImage] = useState<string | File>()

  return (
    <>
      <ContentElement className="order-2 md:order-1">
        <DatesForm className="mb-7 sm:mb-10" action="">
          <Input type="hidden" value="Прохождение практики" name="theme" />
          <Title>Дата прохождения</Title>
          <DatesItems>
            <DatesInput defaultValue="2013-01-08" name="data-start" />
            <DatesInput defaultValue="2013-01-08" name="data-end" />
          </DatesItems>
          <Title>От куратора</Title>
          <DatesTextarea name="comment" />
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
          <Input type="hidden" value={toggleValue} name="Evaluation" />
          <div className="grid grid-cols-4 gap-2">
            <Toggle
              currentValue="Цыпа"
              value={toggleValue}
              src="/img/pictures/chicken.svg"
              onClick={(): void => {
                setToggleValue('Цыпа')
              }}
            >
              Цыпа
            </Toggle>
            <Toggle
              currentValue="Красавчик"
              value={toggleValue}
              src="/img/pictures/chicken.svg"
              onClick={(): void => {
                setToggleValue('Красавчик')
              }}
            >
              Красавчик
            </Toggle>
            <Toggle
              currentValue="Плохо"
              value={toggleValue}
              src="/img/pictures/chicken.svg"
              onClick={(): void => {
                setToggleValue('Плохо')
              }}
            >
              Плохо
            </Toggle>
            <Toggle
              currentValue="Ну такое"
              value={toggleValue}
              src="/img/pictures/chicken.svg"
              onClick={(): void => {
                setToggleValue('Ну такое')
              }}
            >
              Ну такое
            </Toggle>
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
      <ContentElement className="order-1 md:order-2">
        <div className="flex flex-col gap-3 px-4 py-6 md:gap-6 md:px-8 md:py-10 bg-grey dark:bg-dark rounded-3xl">
          <Title>Хронология</Title>
          {data.map((item, index) => (
            <Chronology item={item} key={index} />
          ))}
        </div>
      </ContentElement>
    </>
  )
}
