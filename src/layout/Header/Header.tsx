import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@ui/Button'
import { Icon } from '@ui/Icon'
import {
  AccordionContext,
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@components/Accordion'
import { ThemeContext } from '@components/Theme'
import { Waved } from '@components/Waved'
import { HeaderLink } from '@layout/Header/components/HeaderLink'

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
              <span className="mb-3 font-normal truncate text-16 leading-1">
                Щербаков Иван
              </span>
              <span className="font-normal truncate text-14 leading-1 opacity-40">
                Куратор, веб-дизайн
              </span>
            </div>
            <nav className="flex flex-col">
              <Button
                className="justify-start px-2"
                as={Link}
                size="sm"
                variant={null}
                to="/lk-tutor"
              >
                <Waved variant="dark" />
                <Icon className="text-20" id="settings" />
                <span className="ml-1 font-normal text-black dark:text-white text-16">
                  Настройки
                </span>
              </Button>
              <Button
                className="justify-start px-2"
                size="sm"
                variant={null}
                onClick={themeToggle}
              >
                <Waved variant="dark" />
                <Icon className="text-20" id="pallete" />
                <div className="ml-1 font-normal text-black dark:text-white text-16">
                  Тема:{' '}
                  <span className="text-primary">
                    <ThemeContext.Consumer>
                      {({ themeValue }) => (themeValue ? 'Тёмная' : 'Светлая')}
                    </ThemeContext.Consumer>
                  </span>
                </div>
              </Button>
              <Button
                className="justify-start px-2"
                as={Link}
                color="red"
                size="sm"
                variant={null}
                to="/"
              >
                <Waved variant="dark" />
                <Icon className="text-20" id="arrow-back" />
                <span className="ml-1 font-normal text-black dark:text-white text-16">
                  Выйти
                </span>
              </Button>
            </nav>
          </div>
        </AccordionContent>
      </Accordion>
    </header>
  )
}