import { Link } from 'react-router-dom'
import { Icon } from '@ui/Icon'
import { NavButton } from '@layout/Header/components/NavButton'
import { HeaderUser } from './Header.User'

export const Header = ({ status }: { status: boolean }) => {
  return (
    <header className="container sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey">
      <Link
        className="flex items-center text-black rounded dark:text-white"
        draggable="false"
        to="/lk-tutor"
      >
        <Icon className="w-20 h-7 sm:h-8 sm:w-28 shrink-0" id="logo" />
        <Icon
          className="hidden w-24 h-3 ml-4 shrink-0 md:block opacity-60"
          id="practice"
        />
      </Link>
      {status ? (
        <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 md:mr-auto lg:gap-14">
          <NavButton id="users" to="/lk-tutor/students">
            Студенты
          </NavButton>
          <NavButton id="notification" to="/lk-tutor/tasks">
            Задачи
          </NavButton>
        </nav>
      ) : (
        ''
      )}
      <HeaderUser />
    </header>
  )
}
