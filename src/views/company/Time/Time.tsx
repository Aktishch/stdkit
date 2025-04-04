import { Title } from '@components'
import { useToggle } from '@hooks'
import { TimeType, TSXComponent } from '@utils'
import { BreadCrumbs, Head, HeadButton, Pagination, Table, TableCol, TableHead } from '@views/company/components'
import { Month } from '@views/company/Time/components'

const data: TimeType[] = [
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
        value: 0.2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Скрипник Дмитрий',
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
        value: 0.2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Афанасенко Снежана',
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
        value: 0.2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
  {
    name: 'Ильин Александр',
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
        value: 0.2,
        weekend: false,
      },
      {
        value: 0,
        weekend: false,
      },
    ],
  },
]

export const Time = (): TSXComponent => {
  const monthLength: number[] = [...Array(31).keys()]
  const [editingValue, , , editingToggle] = useToggle(true)
  const routes = [{ path: '/lk/time', breadcrumb: 'Рабочее время' }]

  return (
    <>
      <BreadCrumbs routes={routes} />
      <Head>
        <Title>
          Рабочее время <span className="text-base font-normal opacity-60">(в часах)</span>
        </Title>
        <HeadButton id="hourglass" onClick={editingToggle}>
          {editingValue ? 'Заполнить' : 'Отмена'}
        </HeadButton>
      </Head>
      <div className="flex flex-col gap-10">
        <div>
          <div className="flex items-center justify-between gap-5 mb-6">
            <Title>Сверхурочные</Title>
            <span className="text-base font-medium sm:text-lg opacity-60">Сентябрь 2025</span>
          </div>
          <Table minWidth="min-w-[1230px]">
            <TableHead className="px-4">
              <TableCol className="w-40 text-sm">Сотрудник</TableCol>
              <div className="flex items-center gap-1">
                {monthLength.map((item, index) => (
                  <TableCol className="w-6 text-sm text-center" key={index}>
                    {++item}
                  </TableCol>
                ))}
              </div>
              <TableCol className="w-10 text-sm text-center">Итого</TableCol>
              {editingValue ? null : <TableCol className="w-10" />}
            </TableHead>
            {data.map((item, index) => (
              <Month
                theme="Сверхурочные"
                year="2025"
                month="Сентябрь"
                monthLength={monthLength}
                editing={editingValue}
                item={item}
                key={index}
              />
            ))}
          </Table>
        </div>
        <div>
          <div className="flex items-center justify-between gap-5 mb-6">
            <Title>Пропуски</Title>
            <span className="text-base font-medium sm:text-lg opacity-60">Сентябрь 2025</span>
          </div>
          <Table minWidth="min-w-[1230px]">
            <TableHead className="px-4">
              <TableCol className="w-40 text-sm">Сотрудник</TableCol>
              <div className="flex items-center gap-1">
                {monthLength.map((item, index) => (
                  <TableCol className="w-6 text-sm text-center" key={index}>
                    {++item}
                  </TableCol>
                ))}
              </div>
              <TableCol className="w-10 text-sm text-center">Итого</TableCol>
              {editingValue ? null : <TableCol className="w-10" />}
            </TableHead>
            {data.map((item, index) => (
              <Month
                theme="Пропуски"
                year="2025"
                month="Сентябрь"
                monthLength={monthLength}
                editing={editingValue}
                item={item}
                key={index}
              />
            ))}
          </Table>
        </div>
        <form action="">
          <Pagination />
        </form>
      </div>
    </>
  )
}
