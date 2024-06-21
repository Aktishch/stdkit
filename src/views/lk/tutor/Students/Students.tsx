import { SectionDefault } from '@ui/SectionDefault'
import { Title } from '@views/lk/components/Title'
import { Table } from '@views/lk/components/Table'
import { TableHead } from '@views/lk/components/TableHead'
import { Pagination } from '@views/lk/components/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'
import { Search } from '@views/lk/tutor/components/Search'
import { CategoryButton } from '@views/lk/tutor/Students/components/CategoryButton'
import { StudentDetail } from '@views/lk/tutor/Students/components/StudentDetail'

import { data } from '@views/lk/tutor/Students/data'

export const Students = () => {
  return (
    <SectionDefault>
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
          <StudentDetail className="" item={item} key={index} />
        ))}
      </Table>
      <Pagination />
    </SectionDefault>
  )
}
