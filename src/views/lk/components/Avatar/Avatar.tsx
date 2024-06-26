import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'
import { Loader } from '@ui/Load/Loader'

export interface AvatarProps extends Props {
  webp?: string
  src?: string
}

export const Avatar = ({
  className,
  webp = '/img/pictures/user.webp',
  src = '/img/pictures/user.jpg',
}: AvatarProps) => {
  const style: string = twMerge(
    'flex items-center justify-center w-10 shrink-0 rounded-full bg-gray',
    className
  )

  return (
    <Pack className={style} size="box">
      <Loader />
      <Picture className="image" webp={webp} src={src} loading="lazy" />
    </Pack>
  )
}