import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon, Image, Loader } from '@components'

export interface AvatarProps extends Props {
  src?: string | undefined
  load?: boolean
}

export const Avatar = ({
  className,
  src = undefined,
  load = false,
}: AvatarProps) => {
  const style: string = twMerge(
    'relative rounded-full bg-grey dark:bg-dark shrink-0 overflow-hidden',
    className
  )

  return (
    <div className={style}>
      {load ? <Loader /> : null}
      {src === undefined ? (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <Icon className="text-white" id="user" />
        </div>
      ) : (
        <Image className="image" src={src} />
      )}
    </div>
  )
}
