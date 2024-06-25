import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Icon } from '@ui/Icon'
import { Waved } from '@components/Waved'

interface SidebarLinkProps extends Props {
  id: string
  to: string
}

export const SidebarLink = ({
  className,
  to,
  id,
  children,
}: SidebarLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          'btn btn-gray btn-lg justify-start px-4 font-normal text-black dark:text-white',
          isActive ? 'btn-fade font-semibold pointer-events-none' : '',
          className
        )
      }
      draggable={false}
      to={to}
    >
      <Waved variant="dark" />
      <Icon className="mr-4 text-2xl text-primary" id={id} />
      {children}
    </NavLink>
  )
}
