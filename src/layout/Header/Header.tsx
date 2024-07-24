import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '@/providers'
import { Menu, MenuButton, MenuItems, Icon, Picture } from '@components'
import { ButtonNav } from '@layout/Header/components'

export const Header = () => {
  const { themeToggle, themeValue } = useTheme()

  return (
    <header className="container sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey">
      <Link draggable="false" to="/lk">
        <Icon className="w-20 h-7 sm:h-8 sm:w-28" id="logo" />
      </Link>
      <nav className="flex items-center gap-2 md:mr-auto sm:gap-5 lg:gap-10">
        <ButtonNav id="users" to="/lk/ddd">
          Сотрудники
        </ButtonNav>
        <ButtonNav id="notification" to="/lk/ddd">
          Дежурство
        </ButtonNav>
        <ButtonNav id="hourglass" to="/lk/ddd">
          Опоздания
        </ButtonNav>
      </nav>
      <Menu>
        <MenuButton
          className="relative bg-white dark:bg-dark w-[76px] h-11 rounded-full shadow-md flex items-center justify-between py-2 pr-2 pl-3"
          as="button"
        >
          {({ active }) => (
            <>
              <Icon
                className={`text-sm mr-2 opacity-60 ease-linear transition-transform  ${active ? '-rotate-90' : ''}`}
                id="arrow-left"
              />
              <div className="relative overflow-hidden rounded-full size-7 shrink-0 bg-grey">
                <div className="absolute inset-0 flex items-center justify-center bg-primary">
                  <Icon className="text-xl text-white" id="user" />
                </div>
                <Picture
                  className="image"
                  webp="/img/pictures/user.webp"
                  src="/img/pictures/user.jpg"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </MenuButton>
        <MenuItems className="absolute right-0 px-2 py-6 bg-white shadow-md dark:bg-dark top-14 rounded-2xl w-44">
          <div className="flex flex-col px-2 mb-4 overflow-hidden">
            <span className="font-normal truncate text-sm/none">
              Актищев Александр
            </span>
            <span className="mt-1 font-normal truncate opacity-50 text-xs/none">
              Front-end разработчик
            </span>
          </div>
          <div className="flex flex-col">
            <NavLink
              className="justify-start px-2 btn btn-primary btn-sm"
              draggable={false}
              to=""
            >
              <Icon className="text-xl" id="settings" />
              <span className="ml-1 text-sm font-normal text-black dark:text-white">
                Настройки
              </span>
            </NavLink>
            <button
              className="justify-start px-2 btn btn-primary btn-sm"
              onClick={themeToggle}
            >
              <Icon className="text-xl" id="pallete" />
              <span className="ml-1 text-sm font-normal text-black dark:text-white">
                Тема:{' '}
                <span className="text-primary">
                  {themeValue ? 'Тёмная' : 'Светлая'}
                </span>
              </span>
            </button>
          </div>
        </MenuItems>
      </Menu>
    </header>
  )
}
