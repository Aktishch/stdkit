import { Icon, Loader, Picture } from '@components'
import { ButtonNav } from '@layout/Sidebar/components'

export const Sidebar = () => {
  return (
    <div className="w-full xs:max-w-64">
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-full mr-4 rounded-full pack pack-xl max-w-10 bg-grey shrink-0">
          <Loader />
          <div className="absolute inset-0 flex items-center justify-center bg-primary">
            <Icon className="text-2xl text-white" id="user" />
          </div>
          <Picture
            className="image"
            webp="/img/pictures/user.webp"
            src="/img/pictures/user.jpg"
            loading="lazy"
          />
        </div>
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
          Личные данные
        </ButtonNav>
        <ButtonNav id="lock" to="/lk/password">
          Изменить пароль
        </ButtonNav>
        <a
          className="justify-start px-4 mt-4 font-normal text-red btn btn-lg btn-red"
          draggable={false}
          href=""
        >
          <Icon className="mr-4 text-2xl" id="arrow-back" />
          Выйти
        </a>
      </nav>
    </div>
  )
}
