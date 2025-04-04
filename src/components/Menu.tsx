import { Menu as Wrapper } from '@headlessui/react'
import { Props, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Menu = ({ className, children }: Props): TSXComponent => {
  const style: string = twMerge('relative', className)

  return (
    <Wrapper className={style} as="div">
      {children}
    </Wrapper>
  )
}
