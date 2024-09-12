import { Title } from '@components'
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
      <div className="px-4 -mx-4 overflow-auto">
        <div className="flex flex-col min-w-[540px]">
          <div className="flex items-center justify-between gap-3 py-3 text-sm font-normal text-black rounded-lg lg:py-5 lg:gap-6 bg-grey lg:text-base">
            <span className="w-7 lg:w-10"></span>
            <span className="w-44 lg:w-72 shrink-0">Сотрудник</span>
            <span className="w-20 lg:w-24 shrink-0">Должность</span>
            <span className="w-44 lg:w-72 shrink-0">Период дежурства</span>
          </div>
          {data.map((item, index) => (
            <Chart item={item} key={index} />
          ))}
        </div>
      </div>
      <button
        className="w-full btn btn-primary btn-lg btn-fill max-w-48 mt-7 print:hidden"
        onClick={(): void => window.print()}
      >
        Печать
      </button>
    </>
  )
}
