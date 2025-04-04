import { Icon } from '@components'
import { ButtonNavProps, TSXComponent } from '@utils'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const ButtonNav = ({ className, to, id, children }: ButtonNavProps): TSXComponent => {
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
