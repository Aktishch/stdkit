import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Button } from '@ui/Button'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Icon } from '@ui/Icon'

interface ChronologyProps extends Props {
  item: {
    dateStart: string
    dateEnd: string
    tutor: {
      webp: string
      src: string
      name: string
    }
    student: {
      status: boolean
      src: string
      text: string
    }
    tasks: {
      quantity: number
      overdue: number
    }
    thanks: number
    comment: string
  }
}

export const Chronology = ({ className, item }: ChronologyProps) => {
  const { dateStart, dateEnd, tutor, student, tasks, thanks, comment } = item
  const style: string = twMerge(
    'flex flex-col gap-3 px-4 pt-4 pb-4 bg-white dark:bg-black md:gap-5 md:pt-5 md:pb-8 rounded-2xl',
    className
  )

  return (
    <div className={style}>
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-solid md:pb-5 border-grey">
        <span className="text-sm font-semibold leading-none sm:text-base">
          {dateStart} - {dateEnd}
        </span>
        <span className="text-sm font-normal leading-none sm:text-base text-red">
          Завершена
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <Pack className="w-6 mr-2 rounded-full shrink-0 bg-gray" size="box">
            <Picture
              className="image"
              webp={tutor.webp}
              src={tutor.src}
              loading="eager"
            />
          </Pack>
          <span className="text-sm font-normal leading-none sm:text-base opacity-60">
            {tutor.name}
          </span>
        </div>
        <span className="text-sm font-normal leading-none sm:text-base opacity-60">
          Куратор
        </span>
      </div>
      <div
        className={`flex items-center rounded-lg h-[52px] px-4 ${student.status ? 'bg-green-light' : 'bg-red-light'}`}
      >
        <Picture
          className="mr-2 text-base icon"
          src={student.src}
          loading="eager"
        />
        <span className="text-sm font-normal leading-none text-black sm:text-base">
          {student.text}
        </span>
      </div>
      <ul className="flex flex-col gap-3 pb-3 border-b border-solid md:gap-5 md:pb-5 border-grey">
        <li className="flex items-center justify-between gap-2">
          <span className="text-sm font-normal leading-none sm:text-base">
            Количество задач
          </span>
          <span className="text-sm font-semibold leading-none sm:text-base">
            {tasks.quantity}
          </span>
        </li>
        <li className="flex items-center justify-between gap-2">
          <span className="text-sm font-normal leading-none sm:text-base">
            Просрочено
          </span>
          <span className="text-sm font-semibold leading-none sm:text-base">
            {tasks.overdue}
          </span>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <Icon className="mr-2 text-2xl text-primary" id="medal" />
          <span className="text-sm font-normal leading-none sm:text-base">
            Благодарности
          </span>
        </div>
        <span className="text-sm font-semibold leading-none sm:text-base">
          {thanks}
        </span>
      </div>
      <Button className="text-black" as={Link} color="grey" waved="dark" to="">
        Показать благодарности
      </Button>
      <div className="flex flex-col gap-2 md:gap-4">
        <span className="text-sm font-semibold leading-none sm:text-base">
          Комментарий куратора
        </span>
        <p className="text-sm font-normal leading-snug sm:text-base">
          {comment}
        </p>
      </div>
      <Button color="red" variant="fade">
        <Icon className="mr-2 text-2xl" id="trash" />
        Удалить
      </Button>
    </div>
  )
}
