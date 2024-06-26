import { Title } from '@views/lk/components/Title'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { TaskTable } from '@views/lk/components/Task/TaskTable'

const data: Task[] = [
  {
    status: 'closed',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
  },
  {
    status: 'completed',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
  },
  {
    status: 'progress',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
  },
  {
    status: 'overdue',
    taskName:
      'Разработать баннер для проекта Расти Дача и передать их в работу Сергею Юферову',
    dateStart: '22.08.2023',
    dateEnd: '29.08.2023',
    director: {
      webp: '/img/pictures/user.webp',
      src: '/img/pictures/user.jpg',
      name: 'Ивлеев Е.',
    },
  },
]

export const Tasks = () => {
  return (
    <ContentElement full={true}>
      <Head>
        <Title>Список задач</Title>
        <AddButton>Новая задача</AddButton>
      </Head>
      <TaskTable data={data} />
      <Pagination />
    </ContentElement>
  )
}
