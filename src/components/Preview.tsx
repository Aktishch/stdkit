import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon, Image, Loader } from '@components'

export interface PreviewProps extends Props {
  src?: string | undefined
  load?: boolean
  id?: string
}

export const Preview = ({
  className,
  src = undefined,
  load = false,
  id = 'user',
}: PreviewProps) => {
  const style: string = twMerge(
    'relative rounded-full bg-grey dark:bg-dark shrink-0 overflow-hidden size-[52px] text-4xl',
    className
  )

  return (
    <div className={style}>
      {load ? <Loader /> : null}
      {src === undefined || src === '' ? (
        <div className="absolute inset-0 flex items-center justify-center bg-primary">
          <Icon className="text-white" id={id} />
        </div>
      ) : (
        <Image className="image" src={src} />
      )}
    </div>
  )
}
