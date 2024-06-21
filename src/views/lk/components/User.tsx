import { twMerge } from 'tailwind-merge'
import { AvatarProps } from '@views/lk/components/Avatar'
import { Pack } from '@ui/Pack'
import { Picture } from '@ui/Picture'

export const User = ({ className, webp, src, children }: AvatarProps) => {
  const style: string = twMerge('flex items-center', className)

  return (
    <div className={style}>
      <Pack className="w-5 mr-2 rounded-full bg-gray shrink-0" size="box">
        <Picture className="image" webp={webp} src={src} loading="eager" />
      </Pack>
      <span className="text-sm font-normal leading-4 truncate">{children}</span>
    </div>
  )
}
