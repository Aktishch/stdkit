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

  const style: string = twMerge(
    'flex-grow relative flex items-center justify-center w-full h-full cursor-pointer text-center text-base duration-200 hover:bg-grey dark:hover:bg-primary dark:hover:bg-opacity-20',
    modeParam === mode
      ? 'bg-primary text-white font-semibold pointer-events-none'
      : 'font-normal',
    className
  )

  return (
    <Link className={style} type="button" to={'/login/' + mode}>
      <Waved variant="dark" />
      {children}
    </Link>
  )
}
