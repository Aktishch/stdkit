import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Sidebar = ({ className, children }: Props) => {
  const style: string = twMerge('w-full', 'xs:max-w-[250px]', className)

  return (
    <div className={style}>
      <div className="md:sticky md:left-0 md:right-0 md:top-28">{children}</div>
    </div>
  )
}
