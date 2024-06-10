import { Form } from '@ui/Form'
import { Error } from '@ui/Error'
import { Input } from '@ui/Input'
import { Button } from '@ui/Button'
import { Title } from '@ui/Title'
import { UserAva } from '@ui/UserAva'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import { InputDefault } from '@components/InputDefault'
import { InputText } from '@components/InputText'
import { InputTel } from '@components/InputTel'
import { Waved } from '@components/Waved'
import { LkSidebar } from '@views/lk/components/LkSidebar'
import { LkButton } from '@views/lk/components/LkButton'
// import { DownloadImage } from '@views/lk/components/DownloadImage'

export const TutorSettings = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-10 md:flex-row md:gap-20">
        <LkSidebar>
          <div className="flex items-center mb-6">
            <UserAva className="mr-4" />
            <div className="flex flex-col">
              <UserName>Щербаков Иван</UserName>
              <UserPost>Куратор, веб-дизайн</UserPost>
            </div>
          </div>
          <nav className="flex flex-col">
            <LkButton id="settings" to="/lk-tutor">
              Настройки профиля
            </LkButton>
            <LkButton id="lock" to="/lk-tutor">
              Изменить пароль
            </LkButton>
            <Form className="mt-4" action="/">
              <Input type="hidden" value="Выход" name="theme" />
              <LkButton
                as="button"
                type="submit"
                exit={true}
                id="arrow-back"
                to="/lk-tutor"
              >
                Выйти
              </LkButton>
            </Form>
          </nav>
        </LkSidebar>
        <div className="w-full lg:max-w-[420px]">
          <Title className="mb-6 sm:mb-9">Личные данные</Title>
          <Form action="">
            <Input type="hidden" value="Личные данные" name="theme" />
            {/* <DownloadImage className="mb-6 sm:mb-9" /> */}
            <div className="flex flex-col gap-6">
              <InputText placeholder="Фамилия" name="surname">
                <Error>Введите фамилию</Error>
              </InputText>
              <InputText placeholder="Имя" name="name">
                <Error>Введите имя</Error>
              </InputText>
              <InputText placeholder="Отчество" name="father-name">
                <Error>Введите отчество</Error>
              </InputText>
              <InputText placeholder="Должность" name="work">
                <Error>Введите должность</Error>
              </InputText>
              <InputTel placeholder="Телефон" name="tel">
                <Error>Введите телефон</Error>
              </InputTel>
              <InputDefault type="email" placeholder="E-Mail" name="email">
                <Error>Введите Код</Error>
              </InputDefault>
              <Button className="w-full max-w-60" type="submit">
                <Waved />
                Сохранить изменения
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}
