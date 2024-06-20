import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Filtering } from '@providers/Filtering'

export const StudentsFiltering = ({ className, children }: Props) => {
  const style: string = twMerge('students', className)

  return (
    <Filtering className={style} name="students" value="all">
      {children}
    </Filtering>
  )
}
