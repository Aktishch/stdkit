import { Icon } from '@components'
import { ButtonRatingProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const ButtonRating = ({ className, rating, value, onClick }: ButtonRatingProps): TSXComponent => {
  const style: string = twMerge(
    'text-4xl text-primary transition-opacity peer peer-hover:opacity-100 hover:opacity-100',
    value <= rating ? null : 'opacity-50',
    className
  )

  return (
    <button className={style} type="button" onClick={onClick}>
      <Icon id="star" />
    </button>
  )
}
