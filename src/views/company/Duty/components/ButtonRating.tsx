import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon } from '@components'

export interface ButtonRatingProps extends Props {
  value: number
  rating: number
  onClick: () => void
}

export const ButtonRating = ({
  className,
  rating,
  value,
  onClick,
}: ButtonRatingProps) => {
  const style: string = twMerge(
    'text-base lg:text-lg duration-200 cursor-pointer text-primary peer peer-hover:text-opacity-100 hover:text-opacity-100',
    value <= rating ? null : 'text-opacity-50',
    className
  )

  return (
    <button className={style} type="button" onClick={onClick}>
      <Icon id="star" />
    </button>
  )
}
