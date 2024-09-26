import { useState } from 'react'
import { Title, Icon } from '@components'
import { DialogStaff } from '@dialogs'
import {
  ButtonTop,
  Table,
  TableHead,
  TableCol,
  Pagination,
} from '@views/company/components'
import { ButtonFiltering, Employee } from '@views/company/Staff/components'
import { DialogResult } from '@dialogs'

const data = [
  {
    to: '',
    src: '/img/pictures/user.jpg',
    name: 'Актищев Александр',
    work: 'Front-End',
    status: true,
    date: 'До 29.08.23',
  },
  {
    to: '',
    src: '/img/pictures/user.jpg',
    name: 'Щербаков Иван',
    work: 'Designer',
    status: true,
    date: 'До 29.08.23',
  },
  {
    to: '',
    src: '/img/pictures/user.jpg',
    name: 'Ивлеев Евгений',
    work: 'Project',
    status: false,
    date: '29.08.23 - 29.08.23',
  },
  {
    to: '',
    src: undefined,
    name: 'Шаповалов Никита',
    work: 'Back-end',
    status: true,
    date: 'До 29.08.23',
  },
]

export const Staff = () => {
  const [openDialogStaff, setOpenDialogStaff] = useState(false)
  const [openDialogResult, setOpenDialogResult] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>Сотрудники</Title>
        <ButtonTop id="users" onClick={() => setOpenDialogStaff(true)}>
          Добавить
        </ButtonTop>
      </div>
      <form action="">
        <div className="flex items-center justify-between gap-2 mb-6 border-b border-solid sm:justify-start sm:gap-10 border-grey">
          <ButtonFiltering className="opacity-100 pointer-events-none after:opacity-100 after:visible">
            Все сотрудники
          </ButtonFiltering>
          <ButtonFiltering>Работают</ButtonFiltering>
          <ButtonFiltering>Уволены</ButtonFiltering>
        </div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="relative flex-grow">
            <input
              className="pl-12 input input-primary input-lg dark:input-fade"
              type="search"
              placeholder="Найти сотрудника..."
              name="search"
            />
            <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-12 h-full cursor-pointer">
              <Icon className="text-xl text-primary" id="search" />
            </div>
          </div>
          <button
            className="btn btn-primary rounded-md btn-fill size-[52px] shrink-0"
            type="submit"
          >
            <Icon className="text-2xl" id="filter" />
          </button>
        </div>
        <Table minWidth="min-w-[540px]">
          <TableHead>
            <TableCol className="w-7 lg:w-10" />
            <TableCol className="w-44 lg:w-72">Сотрудник</TableCol>
            <TableCol className="w-20 lg:w-24">Должность</TableCol>
            <TableCol className="w-16 lg:w-24">Статус</TableCol>
            <TableCol className="w-36 lg:w-44">Трудоустройство</TableCol>
          </TableHead>
          {data.map((item, index) => (
            <Employee item={item} key={index} />
          ))}
        </Table>
        <Pagination className="mt-10" />
      </form>
      <DialogStaff
        open={openDialogStaff}
        onClose={setOpenDialogStaff}
        openResult={(): void => setOpenDialogResult(true)}
      />
      <DialogResult
        open={openDialogResult}
        onClose={setOpenDialogResult}
        result={true}
      />
    </>
  )
}
