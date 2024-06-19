import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@ui/Icon'
import { Form } from '@ui/Form'
import { Input } from '@ui/Input'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import {
  AccordionContext,
  Accordion,
  AccordionToggle,
  AccordionContent,
} from '@components/Accordion'
import { useTheme } from '@components/Theme'
import { Waved } from '@components/Waved'
import { HeaderLink } from '@layout/Header/components/HeaderLink'
import { HeaderButton } from '@layout/Header/components/HeaderButton'

interface HeaderProps {
  status: boolean
}

export const Header = ({ status }: HeaderProps) => {
  const { themeToggle, themeValue } = useTheme()

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
        <AccordionToggle className="relative bg-white dark:bg-dark w-[76px] shrink-0 h-11 rounded-full shadow-md flex items-center justify-between py-2 pr-2 pl-3">
          <Waved variant="dark" />
          <AccordionContext.Consumer>
            {({ accordionValue }) => (
              <Icon
                className={`text-sm mr-2 opacity-60 ease-linear duration-300 ${accordionValue ? '-rotate-90' : ''}`}
                id="arrow-left"
              />
            )}
          </AccordionContext.Consumer>
          <div className="flex items-center justify-center rounded-full w-7 shrink-0 h-7 bg-primary">
            <Icon className="text-xl text-white" id="user" />
          </div>
        </AccordionToggle>
        <AccordionContent className="absolute right-0 top-12 w-44">
          <div className="px-2 py-6 overflow-hidden bg-white shadow dark:bg-dark rounded-2xl">
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
                  {themeValue ? 'Тёмная' : 'Светлая'}
                </span>
              </HeaderButton>
              <Form action="/">
                <Input type="hidden" value="Выход" name="theme" />
                <HeaderButton color="red" type="submit" id="arrow-back">
                  Выйти
                </HeaderButton>
              </Form>
            </nav>
          </div>
        </AccordionContent>
      </Accordion>
    </header>
  )
}
