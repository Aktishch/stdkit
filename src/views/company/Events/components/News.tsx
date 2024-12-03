import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon, Image, Loader } from '@components'

export interface NewsProps extends Props {
  item: {
    to: string
    src?: string | undefined
    date: string
    title: string
    text: string
  }
}

export const News = ({ className, item }: NewsProps) => {
  const style: string = twMerge('card dark:bg-dark', className)
  const { to, src, date, title, text } = item

  return (
    <div className={style}>
      <Link
        className="pack pack-md bg-grey dark:bg-black"
        draggable={false}
        to={`/lk/events/news${to}`}
      >
        <Loader />
        {src === undefined || src === '' ? (
          <div className="absolute inset-0 flex items-center justify-center duration-300 ease-linear bg-primary hover:scale-110">
            <Icon className="w-20 text-white h-7 sm:h-8 sm:w-28" id="logo" />
          </div>
        ) : (
          <Image className="image image-rise" src={src} />
        )}
      </Link>
      <div className="px-2 py-4 sm:px-4 sm:py-6 card-content">
        <span className="mb-2 text-xs/none sm:text-sm/none opacity-70">
          {date}
        </span>
        <h3 className="mb-1 text-sm font-medium sm:text-base sm:mb-3 lg:text-lg">
          {title}
        </h3>
        <p className="mb-4 font-normal sm:mb-6 text-xs/normal sm:text-sm/normal lg:text-base/normal line-clamp-3">
          {text}
        </p>
        <Link
          className="mt-auto btn btn-primary btn-md btn-fill"
          draggable={false}
          to={`/lk/events/news${to}`}
        >
          Читать
        </Link>
      </div>
    </div>
  )
}
