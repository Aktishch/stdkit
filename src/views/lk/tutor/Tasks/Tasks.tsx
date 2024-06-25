import { Section } from '@views/lk/components/Section'
import { Title } from '@views/lk/components/Title'
import { Table } from '@views/lk/components/Table/Table'
import { TableHead } from '@views/lk/components/Table/TableHead'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { Search } from '@views/lk/tutor/components/Search'
import { TaskDetail } from '@views/lk/tutor/Tasks/components/TaskDetail'

const data = [
  {
    status: 'closed',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    sphere: 'Веб-дизайн',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
    responsible: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Константинов К.',
    },
  },
  {
    status: 'completed',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    sphere: 'Веб-дизайн',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
    responsible: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Константинов К.',
    },
  },
  {
    status: 'progress',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    sphere: 'Веб-дизайн',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
    responsible: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Константинов К.',
    },
  },
  {
    status: 'overdue',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    sphere: 'Веб-дизайн',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
    responsible: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Константинов К.',
    },
  },
]

export const Tasks = () => {
  return (
    <Section>
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
        {data.map((item, index) => (
          <TaskDetail item={item} index={index} key={index} />
        ))}
      </Table>
      <Pagination />
    </Section>
  )
}
