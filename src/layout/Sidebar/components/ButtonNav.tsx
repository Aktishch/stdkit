import { Icon } from '@components'
import { Props } from '@utils'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export interface ButtonNavProps extends Props {
  id: string
  to: string
}

export const ButtonNav = ({ className, to, id, children }: ButtonNavProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'btn btn-gray btn-lg justify-start px-4 font-normal text-black dark:text-white',
          isActive ? 'btn-fade font-semibold pointer-events-none' : null,
          className
        )
      }
      draggable={false}
      to={to}
    >
      <Icon className="mr-4 text-2xl text-primary" id={id} />
      {children}
    </NavLink>
  )
}
