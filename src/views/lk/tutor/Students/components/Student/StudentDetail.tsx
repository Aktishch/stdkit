import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { UserName } from '@ui/User/UserName'
import { Waved } from '@components/Waved'
import { TableElement } from '@views/lk/components/Table/TableElement'
import { CompletedTasks } from '@views/lk/tutor/Students/components/CompletedTasks'
import { Dates } from '@views/lk/tutor/Students/components/Dates'
import { StudentAvatar } from '@views/lk/tutor/Students/components/Student/StudentAvatar'

interface StudentDetailProps extends Props {
  item: {
    to: string
    webp: string
    src: string
    icon: string
    userName: string
    sphere: string
    university: string
    status: boolean
    tasks: number
    completedTasks: number
    dates: string
  }
}

export const StudentDetail = ({ className, item }: StudentDetailProps) => {
  const {
    to,
    webp,
    src,
    icon,
    userName,
    sphere,
    university,
    status,
    tasks,
    completedTasks,
    dates,
  } = item
  const style: string = twMerge('relative', className)

  return (
    <TableElement className={style} as={Link} draggable={false} to={to}>
      <Waved variant="dark" />
      <StudentAvatar className="w-10" webp={webp} src={src} icon={icon} />
      <UserName className="w-52">{userName}</UserName>
      <span className="w-24">{sphere}</span>
      <span className="w-14">{university}</span>
      <span className={`w-20 ${status ? '' : 'opacity-40'}`}>
        {status ? 'Проходит' : 'Прошел'}
      </span>
      <span className={`w-20 text-center ${status ? '' : 'opacity-40'}`}>
        {tasks}
      </span>
      <CompletedTasks className="w-36" status={status}>
        {completedTasks}
      </CompletedTasks>
      <Dates className="w-44" status={status}>
        {dates}
      </Dates>
    </TableElement>
  )
}
