import { Icon } from '@components'
import { BreadCrumbsProps, TSXComponent } from '@utils'
import { Link, NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

export const BreadCrumbs = ({ className, routes }: BreadCrumbsProps): TSXComponent => {
  const navigate = useNavigate() as NavigateFunction
  const location = useLocation()
  const breadcrumbs = useBreadcrumbs([
    { path: '/', breadcrumb: '' },
    { path: '/lk/', breadcrumb: 'Главная' },
    ...routes,
  ])
  const style: string = twMerge('flex items-center gap-1 font-normal text-xs/none opacity-60 mb-4 lg:mb-7', className)

  return (
    <nav className={style}>
      <button className="rounded-full btn btn-primary" onClick={(): void | Promise<void> => navigate(-1)}>
        <Icon className="text-2xl" id="arrow-back" />
      </button>
      {breadcrumbs.map(({ match, breadcrumb }) => {
        {
          return match.pathname === '/' ? null : (
            <Link
              className={
                match.pathname === location.pathname ? 'pointer-events-none' : 'hover:underline underline-offset-4'
              }
              draggable={false}
              to={match.pathname}
              key={match.pathname}
            >
              {breadcrumb} /
            </Link>
          )
        }
      })}
    </nav>
  )
}
