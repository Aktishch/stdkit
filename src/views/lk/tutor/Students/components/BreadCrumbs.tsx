import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Button } from '@ui/Button'
import { Icon } from '@ui/Icon'

export const BreadCrumbs = ({ className, children }: Props) => {
  const style: string = twMerge('flex items-center mb-7 md:mb-11', className)

  return (
    <div className={style}>
      <Button
        className="mr-3 rounded-full"
        size={null}
        variant={null}
        as={Link}
        to="/lk-tutor"
      >
        <Icon className="text-2xl" id="arrow-back" />
      </Button>
      <nav className="flex items-center justify-center gap-1 text-xs font-normal leading-none">
        <Link
          className="duration-200 opacity-60 hover:opacity-100 hover:underline underline-offset-4"
          draggable={false}
          to=""
        >
          Главная
        </Link>
        <span className="pointer-events-none opacity-60">&gt;</span>
        <Link
          className="duration-200 opacity-60 hover:opacity-100 hover:underline underline-offset-4"
          draggable={false}
          to=""
        >
          Студенты
        </Link>
        <span className="pointer-events-none opacity-60">&gt;</span>
        <span className="pointer-events-none opacity-60">{children}</span>
      </nav>
    </div>
  )
}
