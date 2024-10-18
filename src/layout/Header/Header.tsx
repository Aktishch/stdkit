import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '@/providers'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Icon,
  Avatar,
} from '@components'
import { ButtonNav, ButtonColor } from '@layout/Header/components'

export const Header = () => {
  const { themeToggle, themeValue, color, changeColor } = useTheme()

  return (
    <header className="container sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 xl:gap-24 lg:py-6 border-grey print:hidden">
      <Link draggable="false" to="/lk">
        <Icon className="w-20 h-7 sm:h-8 sm:w-28" id="logo" />
      </Link>
      <nav className="flex items-center gap-2 sm:gap-5 xl:gap-10 sm:mr-auto lg:mr-0">
        <ButtonNav id="users" to="/lk/staff">
          Сотрудники
        </ButtonNav>
        <ButtonNav id="notification" to="/lk/duty">
          Дежурство
        </ButtonNav>
        <ButtonNav id="hourglass" to="/lk/time">
          Рабочее время
        </ButtonNav>
        <ButtonNav id="medal" to="/lk/events">
          Мероприятия
        </ButtonNav>
      </nav>
      <Menu>
        <MenuButton
          className="relative bg-white dark:bg-dark w-9 sm:w-[76px] h-9 sm:h-11 rounded-full shadow-md flex shrink-0 items-center justify-between py-1 sm:py-2 pr-1 sm:pr-2 pl-1 sm:pl-3"
          as="button"
        >
          {({ active }) => (
            <>
              <Icon
                className={`text-sm mr-2 opacity-60 ease-linear transition-transform hidden sm:block ${active ? '-rotate-90' : ''}`}
                id="arrow-left"
              />
              <Avatar className="text-xl size-7" src="/img/pictures/user.jpg" />
            </>
          )}
        </MenuButton>
        <MenuItems className="absolute right-0 px-2 py-6 bg-white shadow-md dark:bg-dark top-12 sm:top-14 rounded-2xl w-44">
          <div className="flex flex-col px-2 mb-4 overflow-hidden">
            <span className="font-normal truncate text-sm/none">
              Актищев Александр
            </span>
            <span className="mt-2 font-normal opacity-50 text-xs/none">
              Front-end
            </span>
          </div>
          <div className="flex items-center justify-between gap-1 px-2 mb-2">
            <ButtonColor
              className="color-default"
              disabled={color === 'default'}
              onClick={(): void => changeColor('default')}
            />
            <ButtonColor
              className="color-purple"
              disabled={color === 'purple'}
              onClick={(): void => changeColor('purple')}
            />
            <ButtonColor
              className="color-yellow"
              disabled={color === 'yellow'}
              onClick={(): void => changeColor('yellow')}
            />
            <ButtonColor
              className="color-blue"
              disabled={color === 'blue'}
              onClick={(): void => changeColor('blue')}
            />
            <ButtonColor
              className="color-orange"
              disabled={color === 'orange'}
              onClick={(): void => changeColor('orange')}
            />
          </div>
          <div className="flex flex-col">
            <MenuItem
              className="justify-start px-2 btn btn-primary btn-sm"
              as={NavLink}
              draggable={false}
              to="/lk"
            >
              <Icon className="text-xl" id="settings" />
              <span className="ml-1 text-sm font-normal text-black dark:text-white">
                Главная
              </span>
            </MenuItem>
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
            <a
              className="justify-start px-2 btn btn-red btn-sm"
              draggable={false}
              href="/"
            >
              <Icon className="text-xl" id="arrow-back" />
              <span className="ml-1 text-sm font-normal text-black dark:text-white">
                Выйти
              </span>
            </a>
          </div>
        </MenuItems>
      </Menu>
    </header>
  )
}
