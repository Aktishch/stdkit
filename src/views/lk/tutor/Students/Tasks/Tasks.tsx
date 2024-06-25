import { Title } from '@views/lk/components/Title'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { BurgerButton } from '@views/lk/components/BurgerButton'
import { User } from '@views/lk/components/User'
import { Table } from '@views/lk/components/Table/Table'
import { TableHead } from '@views/lk/components/Table/TableHead'
import { TableElement } from '@views/lk/components/Table/TableElement'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { TaskStatus } from '@views/lk/components/Task/TaskStatus'
import { TaskName } from '@views/lk/components/Task/TaskName'

export const Tasks = () => {
  return (
    <ContentElement full={true}>
      <Head>
        <Title>Список задач</Title>
        <AddButton>Новая задача</AddButton>
      </Head>
      <Table minWidth="lg">
        <TableHead>
          <span className="w-6" />
          <span className="w-28">Статус</span>
          <span className="w-5">№</span>
          <span className="w-72">Задача</span>
          <span className="w-28">Поставлена</span>
          <span className="w-28">Крайний срок</span>
          <span className="w-36">Постановщик</span>
        </TableHead>
        <TableElement>
          <BurgerButton className="w-6" />
          <TaskStatus className="w-28" variant="completed" />
          <span className="w-5 text-center opacity-50">1</span>
          <TaskName className="w-72">
            Заполнить таблицу на сайте Гарден Класс и других таких же сайтов,
            кот...
          </TaskName>
          <span className="text-sm opacity-50 w-28">22.08.2023</span>
          <span className="text-sm opacity-50 w-28">29.08.2023</span>
          <User
            className="w-36"
            webp="/img/pictures/user.webp"
            src="/img/pictures/user.jpg"
          >
            Константинов К.
          </User>
        </TableElement>
      </Table>
      <Pagination />
    </ContentElement>
  )
}
