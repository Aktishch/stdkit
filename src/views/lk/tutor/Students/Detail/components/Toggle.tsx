import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Picture } from '@ui/Picture'
import { Waved } from '@components/Waved'

interface ToggleProps extends Props {
  currentValue: string
  value: string
  src: string
  onClick: () => void
}

export const Toggle = ({
  className,
  currentValue,
  value,
  src,
  onClick,
  children,
}: ToggleProps) => {
  const style: string = twMerge(
    'relative flex flex-col items-center justify-center h-24 sm:h-32 p-2 rounded-lg cursor-pointer duration-200',
    currentValue === value
      ? 'bg-primary text-white'
      : 'text-black text-opacity-60 bg-grey',
    className
  )

  return (
    <div className={style} onClick={onClick}>
      <Waved />
      <Picture
        className="mb-3 text-3xl sm:mb-5 sm:text-5xl icon"
        src={src}
        loading="eager"
      />
      <span className="text-xs font-normal leading-none text-center sm:text-sm">
        {children}
      </span>
    </div>
  )
}
