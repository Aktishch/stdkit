import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface NavButtonProps extends Props {
  id: string
  to: string
}

export const NavButton = ({ className, id, to, children }: NavButtonProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'btn btn-black size-10 font-normal sm:p-2 dark:hover:bg-primary dark:hover:opacity-100 rounded-full sm:rounded-lg bg-grey dark:bg-primary sm:bg-opacity-0 hover:bg-grey sm:size-auto shrink-0 dark:text-white',
          isActive ? 'pointer-events-none ' : 'opacity-60 dark:sm:bg-opacity-0',
          className
        )
      }
      draggable={false}
      to={to}
    >
      <Waved variant="dark" />
      <Icon className="text-xl sm:text-2xl" id={id} />
      <span className="hidden ml-2 sm:block">{children}</span>
    </NavLink>
  )
}
