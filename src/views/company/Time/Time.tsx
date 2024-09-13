import { useToggle } from '@hooks'
import { Title, Icon } from '@components'
import { Table, TableHead, TableRow, TableCol } from '@views/company/components'
import { InputHours } from '@views/company/Time/components'

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
    ],
  },
]

export const Time = () => {
  const monthLength: number[] = [...Array(31).keys()]
  const [editingValue, , , editingToggle] = useToggle(true)

  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>Рабочее время</Title>
        <button
          className="btn btn-primary btn-lg btn-fade group"
          onClick={editingToggle}
        >
          <Icon
            className="mr-2 text-2xl duration-200 text-primary group-hover:text-white"
            id="pen"
          />
          {editingValue ? 'Редактировать' : 'Запретить'}
        </button>
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
        </TableHead>
        {data.map((item, index) => (
          <TableRow className="px-4" key={index}>
            <TableCol className="text-sm text-center w-7">{++index}</TableCol>
            <TableCol className="text-sm truncate w-44">{item.name}</TableCol>
            <div className="flex items-center gap-1">
              {monthLength.map((_, index) => (
                <InputHours
                  defaultValue={item.dates[index] ? item.dates[index].value : 0}
                  name=""
                  disabled={
                    item.dates[index] ? item.dates[index].weekend : false
                  }
                  key={index}
                />
              ))}
            </div>
          </TableRow>
        ))}
      </Table>
    </>
  )
}
