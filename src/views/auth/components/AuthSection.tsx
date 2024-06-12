import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const AuthSection = ({ className, children }: Props) => {
  const style: string = twMerge(
    'container relative flex items-center justify-center min-h-screen',
    className
  )

  return <section className={style}>{children}</section>
}
