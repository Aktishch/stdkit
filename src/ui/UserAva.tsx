import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Pack } from '@ui/Pack'
import { Loader } from '@ui/Loader'
import { Picture } from '@ui/Picture'

interface AvaProps extends Props {
  webp?: string
  src?: string
}

export const UserAva = ({
  className,
  webp = '/img/pictures/user.webp',
  src = '/img/pictures/user.jpg',
}: AvaProps) => {
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
