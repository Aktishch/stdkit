import { SectionDefault } from '@ui/SectionDefault'
import { Title } from '@views/lk/components/Title'
import { Table } from '@views/lk/components/Table'
import { TableHead } from '@views/lk/components/TableHead'
import { TableElement } from '@views/lk/components/TableElement'
import { BurgerButton } from '@views/lk/components/BurgerButton'
import { TaskStatus } from '@views/lk/components/TaskStatus'
import { TaskName } from '@views/lk/components/TaskName'
import { User } from '@views/lk/components/User'
import { Pagination } from '@views/lk/components/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { Search } from '@views/lk/tutor/components/Search'

// import { data } from '@views/lk/tutor/Students/data'

export const Tasks = () => {
  return (
    <SectionDefault>
      <Head>
        <Title>Задачи</Title>
        <AddButton>Новая задача</AddButton>
      </Head>
      <Search />
      <Table>
        <TableHead>
          <span className="w-6" />
          <span className="w-28">Статус</span>
          <span className="w-5">№</span>
          <span className="w-80">Задача</span>
          <span className="w-24">Сфера</span>
          <span className="w-28">Поставлена</span>
          <span className="w-28">Крайний срок</span>
          <span className="w-36">Постановщик</span>
          <span className="w-36">Ответственный</span>
        </TableHead>
        <TableElement>
          <BurgerButton className="w-6" />
          <TaskStatus className="w-28" variant="closed" />
          <span className="w-5 text-center opacity-50">1</span>
          <TaskName className="w-80">
            Разработать баннер для проекта Расти Дача и передать их в работу
            Сергею Юф...
          </TaskName>
          <span className="w-24 text-sm opacity-50">Веб-дизайн</span>
          <span className="text-sm opacity-50 w-28">22.08.2023</span>
          <span className="text-sm opacity-50 w-28">29.08.2023</span>
          <User
            className="w-36"
            webp="/img/pictures/user.webp"
            src="/img/pictures/user.jpg"
          >
            Ивлеев Е.
          </User>
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
    </SectionDefault>
  )
}
