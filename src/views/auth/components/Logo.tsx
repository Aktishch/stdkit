import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Icon } from '@ui/Icon'

export const Logo = ({ className }: Props) => {
  const style: string = twMerge(
    'flex flex-col items-center justify-center mb-12 md:mt-6 lg:mb-24',
    className
  )

  return (
    <div className={style}>
      <Icon
        className="w-24 h-3 mb-5 shrink-0 md:mb-8 opacity-60"
        id="practice"
      />
      <Icon className="w-56 h-16 shrink-0" id="logo" />
    </div>
  )
}
