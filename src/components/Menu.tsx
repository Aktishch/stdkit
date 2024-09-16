import { Menu as Wrapper } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const Menu = ({ className, children }: Props) => {
  const style: string = twMerge('relative', className)

  return (
    <Wrapper className={style} as="div">
      {children}
    </Wrapper>
  )
}
