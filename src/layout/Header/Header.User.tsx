import { Waved } from '@/components/Waved'
import { Icon } from '@/ui/Icon'
import { Link } from 'react-router-dom'
import { AccordionButton } from './components/AccordionButton'
import { useTheme } from '@/providers/Theme'
import { useAuth } from '@/service/auth/AuthContext'
import { Menu, MenuButton } from '@/ui/Menu/Menu'
import { MenuItems } from '@/ui/Menu/MenuItems'

export function HeaderUser() {
  const { themeToggle, themeValue } = useTheme()
  const { user, logout } = useAuth()

  return (
    <Menu>
      <MenuButton className="relative bg-white dark:bg-dark w-[76px] shrink-0 h-11 rounded-full shadow-md flex items-center justify-between py-2 pr-2 pl-3">
        {({ active }) => (
          <>
            <Waved variant="dark" />

            <Icon
              className={`text-sm mr-2 opacity-60 ease-linear transition-transform  ${active ? '-rotate-90' : ''}`}
              id="arrow-left"
            />

            <div className="flex items-center justify-center rounded-full w-7 shrink-0 h-7 bg-primary">
              <Icon className="text-xl text-white" id="user" />
            </div>
          </>
        )}
      </MenuButton>
      <MenuItems
        className="w-44 px-2 py-6 overflow-hidden bg-white shadow dark:bg-dark rounded-2xl"
        placement="bottom-end"
      >
        <div className="flex flex-col px-2 mb-4">
          <div className="truncate leading-none">
            {user?.name} {user?.last_name}
          </div>
          <div className="truncate text-sm leading-none opacity-40 mt-1">
            {user?.job_title}
          </div>
        </div>
        <nav className="flex flex-col">
          <AccordionButton as={Link} to="/lk-tutor" id="settings">
            Настройки
          </AccordionButton>
          <AccordionButton id="pallete" onClick={themeToggle}>
            Тема:{' '}
            <span className="text-primary">
              {themeValue ? 'Тёмная' : 'Светлая'}
            </span>
          </AccordionButton>

          <AccordionButton
            color="red"
            type="submit"
            id="arrow-back"
            onClick={logout}
          >
            Выйти
          </AccordionButton>
        </nav>
      </MenuItems>
    </Menu>
  )
}
