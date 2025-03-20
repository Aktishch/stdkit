import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Head = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex flex-col gap-4 mb-6 xs:flex-row xs:items-center xs:justify-between sm:mb-10',
    className
  )

  return <div className={style}>{children}</div>
}
