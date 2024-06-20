import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Title } from '@ui/Title'
import { ButtonAdd } from '@views/lk/tutor/components/ButtonAdd'

interface LkHeadProps extends Props {
  text: string
}

export const LkHead = ({ className, text, children }: LkHeadProps) => {
  const style: string = twMerge(
    'flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 mb-8',
    className
  )

  return (
    <div className={style}>
      <Title>{children}</Title>
      <ButtonAdd>{text}</ButtonAdd>
    </div>
  )
}
