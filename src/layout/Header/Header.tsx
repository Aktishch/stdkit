import { useState, useEffect } from 'react'
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
import { ButtonNav, ButtonPallete } from '@layout/Header/components'

export const Header = () => {
  const [color, setColor] = useState(localStorage.getItem('color') || 'default')
  const { themeToggle, themeValue } = useTheme()

  useEffect((): void => {
    const html = document.documentElement as HTMLElement

    html.style.setProperty(
      '--color-primary',
      color === 'default' ? '' : `var(--color-${color})`
    )
    localStorage.setItem('color', color)
  }, [color])

  return (
    <header className="container sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey print:hidden">
      <Link draggable="false" to="/lk">
        <Icon className="w-20 h-7 sm:h-8 sm:w-28" id="logo" />
      </Link>
      <nav className="flex items-center gap-2 md:mr-auto sm:gap-5 lg:gap-10">
        <ButtonNav id="users" to="/company/staff">
          Сотрудники
        </ButtonNav>
        <ButtonNav id="notification" to="/company/duty">
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
                className={`text-sm mr-2 opacity-60 ease-linear transition-transform ${active ? '-rotate-90' : null}`}
                id="arrow-left"
              />
              <Avatar className="text-xl size-7" src="/img/pictures/user.jpg" />
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
          <div className="flex items-center justify-between gap-1 px-2 mb-2">
            <ButtonPallete onClick={(): void => setColor('default')} />
            <ButtonPallete
              className="bg-purple"
              onClick={(): void => setColor('purple')}
            />
            <ButtonPallete
              className="bg-yellow"
              onClick={(): void => setColor('yellow')}
            />
            <ButtonPallete
              className="bg-blue"
              onClick={(): void => setColor('blue')}
            />
            <ButtonPallete
              className="bg-orange"
              onClick={(): void => setColor('orange')}
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
                Личные данные
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
