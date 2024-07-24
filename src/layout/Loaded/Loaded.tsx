import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Preloader } from '@components'

export const Loaded = ({ className }: Props) => {
  const style: string = twMerge(
    'inset-0 fixed z-50 flex items-center justify-center bg-white',
    className
  )

  return (
    <div className={style}>
      <Preloader />
    </div>
  )
}
