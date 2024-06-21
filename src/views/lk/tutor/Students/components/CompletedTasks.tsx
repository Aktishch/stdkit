import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Icon } from '@ui/Icon'

interface CompletedTasksProps extends Props {
  status: boolean
}

export const CompletedTasks = ({
  className,
  status = true,
  children,
}: CompletedTasksProps) => {
  const style: string = twMerge('flex items-center justify-center', className)

  return (
    <div className={style}>
      {status ? (
        <Icon className="mr-1 text-lg text-primary" id="hourglass" />
      ) : null}
      {children}
    </div>
  )
}
