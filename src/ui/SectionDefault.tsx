import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const SectionDefault = ({ className, children }: Props) => {
  const style: string = twMerge('container flex-grow', className)

  return <section className={style}>{children}</section>
}
