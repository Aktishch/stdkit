import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon, Loader, Picture } from '@components'

export interface AvatarProps extends Props {
  webp?: string | null
  src?: string | undefined
}

export const Avatar = ({
  className,
  webp = null,
  src = undefined,
}: AvatarProps) => {
  const style: string = twMerge(
    'w-full rounded-full pack pack-xl max-w-10 bg-grey shrink-0 text-2xl',
    className
  )

  return (
    <div className={style}>
      <Loader />
      {webp === null && src === undefined ? (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <Icon className="text-white" id="user" />
        </div>
      ) : (
        <Picture className="image" webp={webp} src={src} loading="lazy" />
      )}
    </div>
  )
}
