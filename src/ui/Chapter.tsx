import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Picture } from '@ui/Picture'

interface ChapterProps extends Props {
  src: string
}

export const Chapter = ({ className, children, src }: ChapterProps) => {
  const style: string = twMerge('flex items-center justify-between', className)

  return (
    <div className={style}>
      <h3 className="mr-2 text-lg font-semibold leading-normal sm:text-xl">
        {children}
      </h3>
      <Picture className="text-xl icon" src={src} />
    </div>
  )
}