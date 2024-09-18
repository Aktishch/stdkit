import { Icon, Avatar } from '@components'
import { ButtonNav } from '@layout/Sidebar/components'

export const Sidebar = () => {
  return (
    <div className="w-full xs:max-w-64">
      <div className="md:sticky md:top-28 md:left-0 md:right-0">
        <div className="flex items-center mb-4 sm:mb-6">
          <Avatar
            className="mr-4 text-2xl size-10"
            src="/img/pictures/user.jpg"
            load={true}
          />
          <div className="flex flex-col overflow-hidden">
            <span className="font-normal truncate text-base/none">
              Актищев Александр
            </span>
            <span className="mt-1 font-normal truncate opacity-50 text-sm/none">
              Front-end разработчик
            </span>
          </div>
        </div>
        <nav className="flex flex-col">
          <ButtonNav id="settings" to="/lk/settings">
            Настройки
          </ButtonNav>
          <ButtonNav id="lock" to="/lk/password">
            Изменить пароль
          </ButtonNav>
          <a
            className="justify-start px-4 mt-4 font-normal text-red btn btn-lg btn-red"
            draggable={false}
            href="/"
          >
            <Icon className="mr-4 text-2xl" id="arrow-back" />
            Выйти
          </a>
        </nav>
      </div>
    </div>
  )
}
