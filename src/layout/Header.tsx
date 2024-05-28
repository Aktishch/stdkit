import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AccordionContext, Accordion, AccordionToggle, AccordionContent } from '../contexts/Accordion'
import { ThemeContext } from '../contexts/Theme'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Waved } from '../components/Waved'

export const Header = (): React.JSX.Element => {
  const { themeToggle } = useContext(ThemeContext)

  return (
    <header className="container sticky top-0 left-0 right-0 flex items-center justify-between gap-3 py-2 bg-white border-b border-solid dark:bg-black sm:py-4 sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey z-3">
      <Button className="text-black rounded-1 dark:text-white" as={Link} color="gray" size={null} variant={null} to="">
        <Waved variant="dark" />
        <Icon className="w-20 h-7 sm:h-8 sm:w-28 sm:min-w-28 min-w-20" id="logo" />
        <Icon className="hidden w-24 h-3 ml-4 min-w-24 md:block opacity-60" id="practice" />
      </Button>
      <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 md:mr-auto lg:gap-14">
        <Button
          className="w-10 h-10 font-normal sm:p-2 opacity-60 dark:opacity-100 dark:hover:bg-primary rounded-max sm:rounded-2 bg-grey dark:bg-primary dark:sm:bg-opacity-0 sm:bg-opacity-0 hover:bg-grey sm:w-auto sm:h-auto min-w-10 dark:text-white"
          as={Link}
          color="black"
          size={null}
          variant={null}
          to=""
        >
          <Waved variant="dark" />
          <Icon className="text-20 sm:text-24" id="users" />
          <span className="hidden ml-2 sm:block">Студенты</span>
        </Button>
        <Button
          className="w-10 h-10 font-normal sm:p-2 opacity-60 dark:opacity-100 dark:hover:bg-primary rounded-max sm:rounded-2 bg-grey dark:bg-primary dark:sm:bg-opacity-0 sm:bg-opacity-0 hover:bg-grey sm:w-auto sm:h-auto min-w-10 dark:text-white"
          as={Link}
          color="black"
          size={null}
          variant={null}
          to=""
        >
          <Waved variant="dark" />
          <Icon className="text-20 sm:text-24" id="notification" />
          <span className="hidden ml-2 sm:block">Задачи</span>
        </Button>
      </nav>
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
              <span className="mb-3 font-normal truncate text-16 leading-1">Щербаков Иван</span>
              <span className="font-normal truncate text-14 leading-1 opacity-40">Куратор, веб-дизайн</span>
            </div>
            <nav className="flex flex-col">
              <Button className="justify-start px-2" as={Link} size="sm" variant={null} to="">
                <Waved variant="dark" />
                <Icon className="text-20" id="settings" />
                <span className="ml-1 font-normal text-black dark:text-white text-16">Настройки</span>
              </Button>
              <Button className="justify-start px-2" size="sm" variant={null} onClick={themeToggle}>
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
              <Button className="justify-start px-2" as={Link} color="red" size="sm" variant={null} to="">
                <Waved variant="dark" />
                <Icon className="text-20" id="arrow-back" />
                <span className="ml-1 font-normal text-black dark:text-white text-16">Выйти</span>
              </Button>
            </nav>
          </div>
        </AccordionContent>
      </Accordion>
    </header>
  )
}
