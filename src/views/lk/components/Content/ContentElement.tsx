import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const ContentElement = ({ className, children }: Props) => {
  const style: string = twMerge('w-full lg:max-w-[420px]', className)

  return <div className={style}>{children}</div>
}
