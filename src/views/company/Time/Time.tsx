import { useToggle } from '@hooks'
import { Title } from '@components'
import {
  ButtonTop,
  Table,
  TableHead,
  TableCol,
  Pagination,
} from '@views/company/components'
import { Month } from '@views/company/Time/components'

const data = [
  {
    name: 'Актищев Александр',
    dates: [
      {
        value: 0,
        weekend: false,
      },
      {
        value: 2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: true,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Сергей Юферов',
    dates: [
      {
        value: 0,
        weekend: false,
      },
      {
        value: 2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: true,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Александр Ярошук',
    dates: [
      {
        value: 0,
        weekend: false,
      },
      {
        value: 2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: true,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Анастасия Скачкова',
    dates: [
      {
        value: 0,
        weekend: false,
      },
      {
        value: 2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: true,
      },
      {
        value: 0,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
]

export const Time = () => {
  const monthLength: number[] = [...Array(31).keys()]
  const [editingValue, , , editingToggle] = useToggle(true)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>
          Рабочее время{' '}
          <span className="text-base font-normal opacity-60">(в часах)</span>
        </Title>
        <ButtonTop id="hourglass" onClick={editingToggle}>
          {editingValue ? 'Заполнить' : 'Отмена'}
        </ButtonTop>
      </div>
      <div className="flex flex-col gap-10">
        <form className="flex flex-col gap-6" action="">
          <input type="hidden" value="Сверхурочные" name="theme" />
          <div className="flex items-center justify-between gap-5">
            <Title>Сверхурочные</Title>
            <span className="text-lg font-medium opacity-60">Сентябрь</span>
          </div>
          <Table minWidth="min-w-[1230px]">
            <TableHead className="px-4">
              <TableCol className="text-sm text-center w-7">№</TableCol>
              <TableCol className="text-sm w-44">Сотрудник</TableCol>
              <div className="flex items-center gap-1">
                {monthLength.map((item, index) => (
                  <TableCol className="w-6 text-sm text-center" key={index}>
                    {++item}
                  </TableCol>
                ))}
              </div>
              <TableCol className="w-10 text-sm text-center">Итого</TableCol>
            </TableHead>
            {data.map((item, index) => (
              <Month
                monthLength={monthLength}
                item={item}
                number={index}
                status={editingValue}
                key={index}
              />
            ))}
          </Table>
          {editingValue ? null : (
            <button
              className="w-full sm:max-w-60 btn btn-primary btn-lg btn-fill"
              type="submit"
            >
              Сохранить изменения
            </button>
          )}
        </form>
        <form className="flex flex-col gap-6" action="">
          <input type="hidden" value="Пропуски" name="theme" />
          <div className="flex items-center justify-between gap-5">
            <Title>Пропуски</Title>
            <span className="text-lg font-medium opacity-60">Сентябрь</span>
          </div>
          <Table minWidth="min-w-[1230px]">
            <TableHead className="px-4">
              <TableCol className="text-sm text-center w-7">№</TableCol>
              <TableCol className="text-sm w-44">Сотрудник</TableCol>
              <div className="flex items-center gap-1">
                {monthLength.map((item, index) => (
                  <TableCol className="w-6 text-sm text-center" key={index}>
                    {++item}
                  </TableCol>
                ))}
              </div>
              <TableCol className="w-10 text-sm text-center">Итого</TableCol>
            </TableHead>
            {data.map((item, index) => (
              <Month
                monthLength={monthLength}
                item={item}
                number={index}
                status={editingValue}
                key={index}
              />
            ))}
          </Table>
          {editingValue ? null : (
            <button
              className="w-full sm:max-w-60 btn btn-primary btn-lg btn-fill"
              type="submit"
            >
              Сохранить изменения
            </button>
          )}
        </form>
        <form action="">
          <Pagination />
        </form>
      </div>
    </>
  )
}
