import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Preloader = ({ className }: Props) => {
  const style: string = twMerge(
    'fixed inset-0 z-50 flex flex-col items-center justify-center duration-500 bg-white',
    className
  )

  return (
    <div className={style}>
      <div className="preloader">
        <div className="preloader-square" />
        <div className="preloader-square" />
        <div className="preloader-square" />
        <div className="preloader-square" />
      </div>
    </div>
  )
}
