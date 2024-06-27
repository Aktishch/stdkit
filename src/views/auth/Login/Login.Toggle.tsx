import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Waved } from '@components/Waved'
import { Link, useParams } from 'react-router-dom'

interface ToggleProps extends Props {
  mode: 'student' | 'mentor'
}

export const Toggle = ({
  className,
  mode = 'student',
  children,
}: ToggleProps) => {
  const { mode: modeParam } = useParams()
  const isActive = modeParam === mode

  const style: string = twMerge(
    'grow relative flex items-center justify-center h-full cursor-pointer font-normal text-center duration-200 hover:bg-grey dark:hover:bg-primary/20',
    isActive && 'bg-primary text-white font-semibold pointer-events-none',
    className
  )

  return (
    <Link className={style} type="button" to={'/login/' + mode}>
      <Waved variant="dark" />
      {children}
    </Link>
  )
}
