import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@ui/Icon'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import {
  AccordionContext,
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@components/Accordion'
import { ThemeContext } from '@components/Theme'
import { Waved } from '@components/Waved'
import { HeaderLink } from '@layout/components/HeaderLink'
import { HeaderButton } from '@layout/components/HeaderButton'

interface HeaderProps {
  status: boolean
}

export const Header = ({ status }: HeaderProps): React.JSX.Element => {
  const { themeToggle } = useContext(ThemeContext)

  return (
    <header className="container sticky top-0 left-0 right-0 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey z-3">
      <Link
        className="flex items-center text-black rounded-1 dark:text-white"
        draggable="false"
        to="/lk-tutor"
      >
        <Icon
          className="w-20 h-7 sm:h-8 sm:w-28 sm:min-w-28 min-w-20"
          id="logo"
        />
        <Icon
          className="hidden w-24 h-3 ml-4 min-w-24 md:block opacity-60"
          id="practice"
        />
      </Link>
      {status ? (
        <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 md:mr-auto lg:gap-14">
          <HeaderLink id="users" to="">
            Студенты
          </HeaderLink>
          <HeaderLink id="notification" to="">
            Задачи
          </HeaderLink>
        </nav>
      ) : (
        ''
      )}
      <Accordion className="relative" scroll={true}>
        <AccordionToggle className="relative bg-white dark:bg-dark w-[76px] min-w-[76px] h-11 rounded-full shadow-md flex items-center justify-between py-2 pr-2 pl-3">
          <Waved variant="dark" />
          <AccordionContext.Consumer>
            {({ accordionValue }) => (
              <Icon
                className={`text-14 mr-2 opacity-60 ease-linear duration-3 ${accordionValue ? '-rotate-90' : ''}`}
                id="arrow-left"
              />
            )}
          </AccordionContext.Consumer>
          <div className="flex items-center justify-center w-7 min-w-7 h-7 rounded-max bg-primary">
            <Icon className="text-white text-20" id="user" />
          </div>
        </AccordionToggle>
        <AccordionContent className="absolute right-0 top-12 w-44">
          <div className="px-2 py-6 overflow-hidden bg-white shadow dark:bg-dark rounded-4">
            <div className="flex flex-col px-2 mb-4">
              <UserName>Щербаков Иван</UserName>
              <UserPost>Куратор, веб-дизайн</UserPost>
            </div>
            <nav className="flex flex-col">
              <HeaderButton as={Link} to="/lk-tutor" id="settings">
                Настройки
              </HeaderButton>
              <HeaderButton id="pallete" onClick={themeToggle}>
                Тема:{' '}
                <span className="text-primary">
                  <ThemeContext.Consumer>
                    {({ themeValue }) => (themeValue ? 'Тёмная' : 'Светлая')}
                  </ThemeContext.Consumer>
                </span>
              </HeaderButton>
              <HeaderButton color="red" as={Link} to="/" id="arrow-back">
                Выйти
              </HeaderButton>
            </nav>
          </div>
        </AccordionContent>
      </Accordion>
    </header>
  )
}
