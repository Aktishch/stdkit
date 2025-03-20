import { Icon } from '@components'
import { Props } from '@utils'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export interface ButtonNavProps extends Props {
  id: string
  to: string
}

export const ButtonNav = ({ className, id, to, children }: ButtonNavProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'btn btn-black size-8 sm:size-10 font-normal lg:p-2 dark:hover:bg-primary dark:hover:opacity-100 rounded-full lg:rounded-lg bg-grey dark:bg-primary lg:bg-opacity-0 hover:bg-grey lg:size-auto shrink-0 dark:text-white',
          isActive ? 'pointer-events-none' : 'opacity-60 dark:lg:bg-opacity-0',
          className
        )
      }
      draggable={false}
      to={to}
    >
      <Icon className="text-lg sm:text-xl lg:text-2xl" id={id} />
      <span className="hidden ml-2 lg:block">{children}</span>
    </NavLink>
  )
}
