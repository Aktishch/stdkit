import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { BurgerButton } from '@views/lk/components/BurgerButton'
import { User } from '@views/lk/components/User'
import { Table } from '@views/lk/components/Table/Table'
import { TableHead } from '@views/lk/components/Table/TableHead'
import { TableElement } from '@views/lk/components/Table/TableElement'
import { TaskStatus } from '@views/lk/components/Task/TaskStatus'
import { TaskName } from '@views/lk/components/Task/TaskName'

interface TaskTableProps extends Props {
  data: Task[]
}

export const TaskTable = ({ className, data }: TaskTableProps) => {
  const style: string = twMerge(className)

  return (
    <Table className={style} minWidth="lg">
      <TableHead>
        <span className="w-6" />
        <span className="w-28">Статус</span>
        <span className="w-5">№</span>
        <span className="w-72">Задача</span>
        <span className="w-28">Поставлена</span>
        <span className="w-28">Крайний срок</span>
        <span className="w-36">Постановщик</span>
      </TableHead>
      {data.map((item, index) => (
        <TableElement key={index}>
          <BurgerButton className="w-6" />
          <TaskStatus className="w-28" variant={item.status} />
          <span className="w-5 text-center opacity-50">{++index}</span>
          <TaskName className="w-72">{item.taskName}</TaskName>
          <span className="text-sm opacity-50 w-28">{item.dateStart}</span>
          <span className="text-sm opacity-50 w-28">{item.dateEnd}</span>
          <User
            className="w-36"
            webp={item.director.webp}
            src={item.director.src}
          >
            {item.director.name}
          </User>
        </TableElement>
      ))}
    </Table>
  )
}
