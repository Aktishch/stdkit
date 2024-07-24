import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon } from '@components'

export interface ButtonNavProps extends Props {
  id: string
  to: string
}

export const ButtonNav = ({ className, id, to, children }: ButtonNavProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'btn btn-black size-10 font-normal md:p-2 dark:hover:bg-primary dark:hover:opacity-100 rounded-full md:rounded-lg bg-grey dark:bg-primary md:bg-opacity-0 hover:bg-grey md:size-auto shrink-0 dark:text-white',
          isActive ? 'pointer-events-none ' : 'opacity-60 dark:sm:bg-opacity-0',
          className
        )
      }
      draggable={false}
      to={to}
    >
      <Icon className="text-xl md:text-2xl" id={id} />
      <span className="hidden ml-2 md:block">{children}</span>
    </NavLink>
  )
}