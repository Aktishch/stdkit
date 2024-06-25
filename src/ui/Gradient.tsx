import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Loader } from '@ui/Load/Loader'

export const Gradient = ({ className }: Props) => {
  const style: string = twMerge('absolute inset-0 dark:hidden', className)

  return (
    <div className={style}>
      <Pack className="h-full bg-gray" size={null}>
        <Loader />
        <Picture
          className="image"
          webp="/img/pictures/authorization-bg.webp"
          src="/img/pictures/authorization-bg.jpg"
          loading="lazy"
        />
      </Pack>
    </div>
  )
}
