import { Section } from '@views/lk/components/Section'
import { Title } from '@views/lk/components/Title'
import { Table } from '@views/lk/components/Table/Table'
import { TableHead } from '@views/lk/components/Table/TableHead'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { Search } from '@views/lk/tutor/components/Search'
import { CategoryButton } from '@views/lk/tutor/Students/List/components/CategoryButton'
import { StudentDetail } from '@views/lk/tutor/Students/List/components/Student/StudentDetail'

const data = [
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    icon: '/img/pictures/chicken.svg',
    userName: 'Константинов Константин',
    sphere: 'Веб-дизайн',
    university: 'КГИК',
    status: true,
    tasks: 2,
    completedTasks: 2,
    dates: 'До 29.08.23',
  },
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    icon: '/img/pictures/chicken.svg',
    userName: 'Константинов Константин',
    sphere: 'Front End',
    university: 'КубГАУ',
    status: true,
    tasks: 22,
    completedTasks: 2,
    dates: 'До 29.08.23',
  },
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    icon: '/img/pictures/chicken.svg',
    userName: 'Константинов Константин',
    sphere: 'Back End',
    university: 'КГИК',
    status: false,
    tasks: 12,
    completedTasks: 2,
    dates: 'До 29.08.23',
  },
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    icon: '/img/pictures/chicken.svg',
    userName: 'Константинов Константин',
    sphere: 'Контент',
    university: 'КубГАУ',
    status: false,
    tasks: 21,
    completedTasks: 2,
    dates: 'До 29.08.23',
  },
]

export const List = () => {
  return (
    <Section>
      <Head>
        <Title>Студенты</Title>
        <AddButton>Добавить студента</AddButton>
      </Head>
      <div className="flex items-center justify-between gap-3 mb-6 border-b border-solid sm:justify-start sm:gap-10 border-grey">
        <CategoryButton className="text-opacity-100 pointer-events-none dark:text-opacity-100 after:visible after:opacity-100">
          Все студенты
        </CategoryButton>
        <CategoryButton>Проходят</CategoryButton>
        <CategoryButton>Прошли</CategoryButton>
      </div>
      <Search />
      <Table>
        <TableHead>
          <span className="w-10" />
          <span className="w-52">Студент</span>
          <span className="w-24">Сфера</span>
          <span className="w-14">ВУЗ</span>
          <span className="w-20">Статус</span>
          <span className="w-20 text-center">Проходит</span>
          <span className="text-center w-36">Задач выполнено</span>
          <span className="text-center w-44">Практика</span>
        </TableHead>
        {data.map((item, index) => (
          <StudentDetail item={item} key={index} />
        ))}
      </Table>
      <Pagination />
    </Section>
  )
}
