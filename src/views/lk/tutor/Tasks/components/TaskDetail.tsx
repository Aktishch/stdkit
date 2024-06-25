import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { BurgerButton } from '@views/lk/components/BurgerButton'
import { User } from '@views/lk/components/User'
import { TableElement } from '@views/lk/components/Table/TableElement'
import { TaskStatus } from '@views/lk/components/Task/TaskStatus'
import { TaskName } from '@views/lk/components/Task/TaskName'

interface TaskDetailProps extends Props {
  item: Task
  index: number
}

export const TaskDetail = ({ className, item, index }: TaskDetailProps) => {
  const {
    status,
    taskName,
    sphere,
    dateStart,
    dateEnd,
    director,
    responsible,
  } = item
  const style: string = twMerge(className)

  return (
    <TableElement className={style}>
      <BurgerButton className="w-6" />
      <TaskStatus className="w-28" variant={status} />
      <span className="w-5 text-center opacity-50">{++index}</span>
      <TaskName className="w-80">{taskName}</TaskName>
      <span className="w-24 text-sm opacity-50">{sphere}</span>
      <span className="text-sm opacity-50 w-28">{dateStart}</span>
      <span className="text-sm opacity-50 w-28">{dateEnd}</span>
      <User className="w-36" webp={director.webp} src={director.src}>
        {director.name}
      </User>
      <User className="w-36" webp={responsible.webp} src={responsible.src}>
        {responsible.name}
      </User>
    </TableElement>
  )
}
