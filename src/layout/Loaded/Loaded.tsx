import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Preloader } from '@ui/Load/Preloader'

export const Loaded = ({ className }: Props) => {
  const style: string = twMerge(
    'py-24 inset-0 z-50 flex flex-col items-center justify-center duration-500',
    className
  )

  return (
    <div className={style}>
      <Preloader />
    </div>
  )
}
