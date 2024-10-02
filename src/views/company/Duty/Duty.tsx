import { useState } from 'react'
import { Title } from '@components'
import { DialogRating } from '@dialogs'
import {
  ButtonTop,
  Table,
  TableHead,
  TableCol,
  Pagination,
} from '@views/company/components'
import { Chart } from '@views/company/Duty/components'

const data = [
  {
    src: '/img/pictures/user.jpg',
    name: 'Актищев Александр',
    work: 'Front-End',
    period: '22.07.2024 - 28.07.2024',
    rating: 4,
    active: false,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Сергей Юферов',
    work: 'Front-End',
    period: '22.07.2024 - 28.07.2024',
    rating: 0,
    active: false,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Александр Ярошук',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
    active: true,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Анастасия Скачкова',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
    active: false,
  },
]

export const Duty = () => {
  const [parameters, setParameters] = useState({})
  const [openDialogRating, setOpenDialogRating] = useState(false)

  console.log(parameters)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>Дежурство</Title>
        <ButtonTop
          className="print:hidden pointer-coarse:hidden"
          id="notification"
          onClick={(): void => window.print()}
        >
          Печать
        </ButtonTop>
      </div>
      <form action="">
        <input type="hidden" value="Дежурство" name="theme" />
        <Table minWidth="min-w-[720px]">
          <TableHead>
            <TableCol className="w-7 lg:w-10" />
            <TableCol className="w-44 lg:w-72">Сотрудник</TableCol>
            <TableCol className="w-20 lg:w-24">Должность</TableCol>
            <TableCol className="w-44 lg:w-48">Период дежурства</TableCol>
            <TableCol className="w-32 text-center print:hidden">
              Оценка
            </TableCol>
          </TableHead>
          {data.map((item, index) => (
            <Chart
              item={item}
              onClick={(): void => {
                setOpenDialogRating(true)
                setParameters(item)
              }}
              key={index}
            />
          ))}
        </Table>
        <Pagination className="mt-10 print:hidden" />
      </form>
      <DialogRating open={openDialogRating} onClose={setOpenDialogRating} />
    </>
  )
}
