import { Waved } from '@/components/Waved'
import {
  Accordion,
  AccordionToggle,
  AccordionContext,
  AccordionContent,
} from '@/providers/Accordion'
import { Input } from '@/ui/Form/Input'
import { Icon } from '@/ui/Icon'
import { UserName } from '@/ui/User/UserName'
import { UserPost } from '@/ui/User/UserPost'
import { Link, Form } from 'react-router-dom'
import { AccordionButton } from './components/AccordionButton'
import { useTheme } from '@/providers/Theme'

export function HeaderUser() {
  const { themeToggle, themeValue } = useTheme()

  return (
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
            <UserName>Константинов Константин</UserName>
            <UserPost>Куратор, веб-дизайн</UserPost>
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

            <AccordionButton color="red" type="submit" id="arrow-back">
              Выйти
            </AccordionButton>
          </nav>
        </div>
      </AccordionContent>
    </Accordion>
  )
}
