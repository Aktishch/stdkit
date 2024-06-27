import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@ui/Button'
import { ButtonGrey } from '@views/lk/components/Button/ButtonGrey'

export const ButtonDownload = ({ className, href }: ButtonProps) => {
  const style: string = twMerge(className)

  return (
    <ButtonGrey
      className={style}
      as="a"
      id="download"
      href={href}
      download={true}
    />
  )
}
