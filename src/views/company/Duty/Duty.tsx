import { Title } from '@components'
import { Table, TableHead, TableCol } from '@views/company/components'
import { Chart } from '@views/company/Duty/components'

const data = [
  {
    src: '/img/pictures/user.jpg',
    name: 'Актищев Александр',
    work: 'Front End',
    period: '22.07.2024 - 28.07.2024',
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Сергей Юферов',
    work: 'Front End',
    period: '22.07.2024 - 28.07.2024',
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Александр Ярошук',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Анастасия Скачкова',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
  },
]

export const Duty = () => {
  return (
    <>
      <Title className="mb-6 sm:mb-10">Дежурство</Title>
      <Table minWidth="min-w-[540px]">
        <TableHead>
          <TableCol className="w-7 lg:w-10" />
          <TableCol className="w-44 lg:w-72">Сотрудник</TableCol>
          <TableCol className="w-20 lg:w-24">Должность</TableCol>
          <TableCol className="w-44 lg:w-72">Период дежурства</TableCol>
        </TableHead>
        {data.map((item, index) => (
          <Chart item={item} key={index} />
        ))}
      </Table>
      <button
        className="w-full btn btn-primary btn-lg btn-fill max-w-48 mt-7 print:hidden"
        onClick={(): void => window.print()}
      >
        Печать
      </button>
    </>
  )
}
