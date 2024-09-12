import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'

export interface EmployeeProps extends Props {
  item: {
    to: string
    src?: string | undefined
    name: string
    work: string
    status: boolean
    date: string
  }
}

export const Employee = ({ className, item }: EmployeeProps) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-2 duration-200 text-sm lg:text-base font-normal border-b border-solid lg:gap-6 border-grey hover:bg-grey/30',
    className
  )
  const { to, src, name, work, status, date } = item

  return (
    <Link className={style} draggable={false} to={`/company/employee${to}`}>
      <Avatar
        className="text-base lg:text-2xl size-7 lg:size-10"
        src={src}
        load={true}
      />
      <span className="truncate w-44 lg:w-72 shrink-0">{name}</span>
      <span className="w-20 lg:w-24 shrink-0">{work}</span>
      <span className={`w-16 lg:w-24 shrink-0 ${status ? null : 'opacity-60'}`}>
        {status ? 'Работает' : 'Уволен'}
      </span>
      <div
        className={`flex items-center justify-center text-center rounded-full w-36 lg:w-44 h-9 text-black text-xs lg:text-base shrink-0 ${status ? 'bg-green' : 'bg-grey'}`}
      >
        {date}
      </div>
    </Link>
  )
}
