import { Preview } from '@components'
import { Props, StaffType, TSXComponent } from '@utils'
import { TableCol, TableRow } from '@views/company/components'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface EmployeeProps extends Props {
  item: StaffType
}

export const Employee = ({ className, item }: EmployeeProps): TSXComponent => {
  const style: string = twMerge('block group', className)
  const { to, src, name, work, status, date } = item

  return (
    <Link className={style} draggable={false} to={`/lk/staff/employee${to}`}>
      <TableRow className="transition group-hover:bg-grey/50">
        <Preview className="text-base lg:text-2xl size-7 lg:size-10" src={src} load={true} />
        <TableCol className="truncate w-44 lg:w-72">{name}</TableCol>
        <TableCol className="w-20 lg:w-24">{work}</TableCol>
        <TableCol className={`w-16 lg:w-24 ${status ? '' : 'opacity-60'}`}>{status ? 'Работает' : 'Уволен'}</TableCol>
        <TableCol
          className={`flex items-center justify-center text-center rounded-full w-40 lg:w-52 h-9 text-black text-xs lg:text-base ${status ? 'bg-green' : 'bg-grey'}`}
        >
          {date}
        </TableCol>
      </TableRow>
    </Link>
  )
}
