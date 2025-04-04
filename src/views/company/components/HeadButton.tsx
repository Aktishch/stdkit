import { Icon } from '@components'
import { HeadButtonProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const HeadButton = ({ className, id, children, ...props }: HeadButtonProps): TSXComponent => {
  const style: string = twMerge('w-full btn btn-primary btn-lg btn-fade xs:max-w-52', className)

  return (
    <button className={style} {...props}>
      <Icon className="mr-2 text-2xl" id={id} />
      {children}
    </button>
  )
}
