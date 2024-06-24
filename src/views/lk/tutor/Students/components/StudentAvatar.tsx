import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarProps } from '@views/lk/components/Avatar'
import { Picture } from '@ui/Picture'

export interface StudentAvatarProps extends AvatarProps {
  icon: string
}

export const StudentAvatar = ({
  className,
  webp,
  src,
  icon,
}: StudentAvatarProps) => {
  const style: string = twMerge('relative', className)

  return (
    <div className={style}>
      <Avatar webp={webp} src={src} />
      <span className="absolute bottom-0 flex items-center justify-center bg-white rounded-full size-6 -right-2">
        <Picture className="text-base icon" src={icon} />
      </span>
    </div>
  )
}
