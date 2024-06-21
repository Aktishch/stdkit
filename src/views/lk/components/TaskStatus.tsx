import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

const taskVariants = {
  closed: {
    color: 'bg-green',
    text: 'Закрыта',
  },
  completed: {
    color: 'bg-gold',
    text: 'Выполнена',
  },
  progress: {
    color: 'bg-blue',
    text: 'Выполняется',
  },
  overdue: {
    color: 'bg-red',
    text: 'Просрочена',
  },
}

interface TaskStatusProps extends Props {
  variant: keyof typeof taskVariants
}

export const TaskStatus = ({ className, variant }: TaskStatusProps) => {
  const style: string = twMerge(
    'flex items-center justify-center p-2 text-sm font-semibold text-center text-white rounded-full h-9',
    variant ? taskVariants[variant].color : null,
    className
  )

  return <div className={style}>{taskVariants[variant].text}</div>
}
