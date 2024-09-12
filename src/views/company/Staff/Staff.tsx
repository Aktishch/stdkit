import { Title, Icon } from '@components'
import { ButtonFiltering, Employee } from '@views/company/Staff/components'

const data = [
  {
    to: '',
    src: '/img/pictures/user.jpg',
    name: 'Актищев Александр',
    work: 'Front End',
    status: true,
    date: 'До 29.08.23',
  },
  {
    to: '',
    src: '/img/pictures/user.jpg',
    name: 'Щербаков Иван',
    work: 'Design',
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
        <button className="btn btn-primary btn-lg btn-fade">
          <Icon className="mr-2 text-2xl" id="plus" />
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
        <div className="px-4 -mx-4 overflow-auto">
          <div className="flex flex-col min-w-[540px]">
            <div className="flex items-center justify-between gap-3 py-3 text-sm font-normal text-black rounded-lg lg:py-5 lg:gap-6 bg-grey lg:text-base">
              <span className="w-7 lg:w-10 shrink-0"></span>
              <span className="w-44 lg:w-72 shrink-0">Сотрудник</span>
              <span className="w-20 lg:w-24 shrink-0">Должность</span>
              <span className="w-16 lg:w-24 shrink-0">Статус</span>
              <span className="w-36 lg:w-44 shrink-0">Трудоустройство</span>
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
