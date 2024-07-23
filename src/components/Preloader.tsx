import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const Preloader = ({ className }: Props) => {
  const style: string = twMerge('preloader', className)

  return (
    <div className={style}>
      <div className="preloader-square" />
      <div className="preloader-square" />
      <div className="preloader-square" />
      <div className="preloader-square" />
    </div>
  )
}
