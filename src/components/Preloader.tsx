import { Props, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Preloader = ({ className }: Props): TSXComponent => {
  const style: string = twMerge(
    'inset-0 fixed z-10 flex items-center justify-center bg-white/50 dark:bg-dark/50',
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
