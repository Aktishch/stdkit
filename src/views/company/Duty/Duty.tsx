import { useState } from 'react'
import { Icon, Title } from '@components'
import { DialogDuty, DialogRating } from '@dialogs'
import {
  BreadCrumbs,
  BreadCrumbsItem,
  Head,
  HeadButton,
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
    checked: false,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Сергей Юферов',
    work: 'Front-End',
    period: '22.07.2024 - 28.07.2024',
    rating: 0,
    active: false,
    checked: true,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Александр Ярошук',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
    rating: 0,
    active: true,
    checked: false,
  },
  {
    src: '/img/pictures/user.jpg',
    name: 'Анастасия Скачкова',
    work: 'Project',
    period: '22.07.2024 - 28.07.2024',
    rating: 0,
    active: false,
    checked: false,
  },
]

export const Duty = () => {
  const [parameters, setParameters] = useState(
    {} as { name: string; period: string }
  )
  const [openDialogDuty, setOpenDialogDuty] = useState(false)
  const [openDialogRating, setOpenDialogRating] = useState(false)

  return (
    <>
      <BreadCrumbs>
        <BreadCrumbsItem to="/lk/duty/">Дежурство</BreadCrumbsItem>
      </BreadCrumbs>
      <Head>
        <Title>Дежурство</Title>
        <HeadButton
          className="print:hidden pointer-coarse:hidden"
          id="notification"
          onClick={(): void => window.print()}
        >
          Печать
        </HeadButton>
      </Head>
      <div className="flex mb-6 print:hidden">
        <button
          className="btn btn-primary btn-fill btn-md"
          onClick={() => setOpenDialogDuty(true)}
        >
          <Icon className="mr-2 text-xl text-primary color-yellow" id="star" />
          Требования
        </button>
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
                setParameters({
                  name: item.name,
                  period: item.period,
                })
              }}
              key={index}
            />
          ))}
        </Table>
        <Pagination className="mt-10 print:hidden" />
      </form>
      <DialogDuty open={openDialogDuty} onClose={setOpenDialogDuty} />
      <DialogRating
        open={openDialogRating}
        onClose={setOpenDialogRating}
        item={parameters}
      />
    </>
  )
}
