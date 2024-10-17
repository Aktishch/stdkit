import { Link, useNavigate, NavigateFunction } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon } from '@components'

export const BreadCrumbs = ({ className, children }: Props) => {
  const navigate = useNavigate() as NavigateFunction
  const style: string = twMerge(
    'flex items-center gap-2 font-normal text-xs/none opacity-60 mb-4 lg:mb-7',
    className
  )

  return (
    <div className={style}>
      <button
        className="rounded-full btn btn-primary"
        onClick={(): void => navigate(-1)}
      >
        <Icon className="text-2xl" id="arrow-back" />
      </button>
      <Link
        className="hover:underline underline-offset-4"
        draggable={false}
        to="/lk/"
      >
        Главная
      </Link>
      {children}
    </div>
  )
}
