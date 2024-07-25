import { Title, Icon } from '@components'
import { ButtonFiltering, Employee } from '@views/company/Staff/components'

const data = [
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    name: 'Актищев Александр',
    work: 'Front End',
    status: true,
    date: 'До 29.08.23',
  },
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    name: 'Щербаков Иван',
    work: 'Design',
    status: true,
    date: 'До 29.08.23',
  },
  {
    to: '',
    webp: '/img/pictures/user.webp',
    src: '/img/pictures/user.jpg',
    name: 'Ивлеев Евгений',
    work: 'Project',
    status: false,
    date: '29.08.23 - 29.08.23',
  },
  {
    to: '',
    webp: null,
    src: undefined,
    name: 'Шаповалов Никита',
    work: 'Back End',
    status: true,
    date: 'До 29.08.23',
  },
]

export const Staff = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10">
        <Title>Сотрудники</Title>
        <button className="btn btn-primary btn-lg btn-fade group">
          <Icon
            className="mr-2 text-2xl duration-200 text-primary group-hover:text-white"
            id="plus"
          />
          Добавить сотрудника
        </button>
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
              className="pl-10 border-2 border-solid input input-primary input-lg border-primary"
              type="search"
              placeholder="Найти сотрудника..."
              name="search"
            />
            <div className="input-icon input-icon-left">
              <Icon className="text-xl text-primary" id="search" />
            </div>
          </div>
          <button
            className="btn btn-primary btn-lg btn-fill p-0 w-[52px] shrink-0"
            type="submit"
          >
            <Icon className="text-2xl" id="filter" />
          </button>
        </div>
        <div className="px-4 -mx-4 overflow-auto">
          <div className="flex flex-col min-w-[800px]">
            <div className="flex items-center justify-between gap-3 py-5 text-black rounded-lg lg:gap-6 bg-grey">
              <span className="w-10"></span>
              <span className="font-normal w-72 text-base/tight shrink-0">
                Сотрудник
              </span>
              <span className="w-24 font-normal text-base/tight shrink-0">
                Должность
              </span>
              <span className="w-24 font-normal text-base/tight shrink-0">
                Статус
              </span>
              <span className="font-normal w-44 text-base/tight shrink-0">
                Трудоустройство
              </span>
            </div>
            {data.map((item, index) => (
              <Employee item={item} key={index} />
            ))}
          </div>
        </div>
      </form>
    </>
  )
}
