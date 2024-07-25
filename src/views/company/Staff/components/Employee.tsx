import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'

export interface EmployeeProps extends Props {
  item: {
    to: string
    webp?: string | null
    src?: string | undefined
    name: string
    work: string
    status: boolean
    date: string
  }
}

export const Employee = ({ className, item }: EmployeeProps) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-2 duration-200 border-b border-solid lg:gap-6 border-grey hover:bg-grey/30',
    className
  )
  const { to, webp, src, name, work, status, date } = item

  return (
    <Link className={style} draggable={false} to={`/company/employee${to}`}>
      <Avatar className="w-10" webp={webp} src={src} />
      <span className="font-normal truncate w-72 text-base/tight shrink-0">
        {name}
      </span>
      <span className="w-24 font-normal text-base/tight shrink-0">{work}</span>
      <span
        className={`w-24 font-normal text-base/tight shrink-0 ${status ? null : 'opacity-60'}`}
      >
        {status ? 'Работает' : 'Уволен'}
      </span>
      <div
        className={`flex items-center justify-center font-normal text-center rounded-full w-44 h-9 text-black text-base/tight shrink-0 ${status ? 'bg-green' : 'bg-grey'}`}
      >
        {date}
      </div>
    </Link>
  )
}
