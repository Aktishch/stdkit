import { Loader } from '@components'
import { ButtonSubmitProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const ButtonSubmit = ({ className, load = false, children, ...props }: ButtonSubmitProps): TSXComponent => {
  const style: string = twMerge(className)

  return (
    <button className={style} type="submit" disabled={load} {...props}>
      {load ? <Loader className="text-white" /> : children}
    </button>
  )
}
