import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@ui/Button'
import { ButtonGrey } from '@views/lk/components/Button/ButtonGrey'

export const ButtonToggle = ({ className, ...props }: ButtonProps) => {
  const style: string = twMerge(className)

  return <ButtonGrey className={style} variant={null} id="dots" {...props} />
}
