import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

interface ContentElementProps extends Props {
  full?: boolean
}

export const ContentElement = ({
  className,
  full = false,
  children,
}: ContentElementProps) => {
  const style: string = twMerge(
    'w-full',
    full ? '' : 'lg:max-w-[420px]',
    className
  )

  return <div className={style}>{children}</div>
}
