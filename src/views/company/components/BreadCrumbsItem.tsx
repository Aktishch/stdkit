import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export interface BreadCrumbsItemProps extends Props {
  to: string
}

export const BreadCrumbsItem = ({
  className,
  to,
  children,
}: BreadCrumbsItemProps) => {
  return (
    <>
      {'>'}
      <NavLink
        className={({ isActive }) =>
          twMerge(
            isActive
              ? 'pointer-events-none '
              : 'hover:underline underline-offset-4',
            className
          )
        }
        draggable={false}
        to={to}
        end
      >
        {children}
      </NavLink>
    </>
  )
}
