import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { UserAva, UserAvaProps } from '@ui/UserAva'
import { Picture } from '@ui/Picture'
import { Waved } from '@components/Waved'

interface StudentAvaProps extends UserAvaProps {
  to: string
  icon: string
}

export const StudentAva = ({
  className,
  to,
  webp,
  src,
  icon,
}: StudentAvaProps) => {
  const style: string = twMerge('relative block w-full', className)

  return (
    <Link className={style} to={to}>
      <Waved />
      <UserAva webp={webp} src={src} />
      <span className="absolute bottom-0 flex items-center justify-center bg-white rounded-full size-6 -right-2">
        <Picture className="text-base icon" src={icon} />
      </span>
    </Link>
  )
}
