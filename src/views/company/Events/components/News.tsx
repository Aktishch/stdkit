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
        to={`/company/news${to}`}
      >
        <Loader />
        {src === undefined || src === '' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-primary">
            <Icon className="w-20 text-white h-7 sm:h-8 sm:w-28" id="logo" />
          </div>
        ) : (
          <Image className="image" src={src} />
        )}
      </Link>
      <div className="px-4 py-4 sm:py-6 card-content">
        <span className="mb-2 text-xs/none sm:text-sm/none opacity-70">
          {date}
        </span>
        <h3 className="mb-1 text-base font-medium sm:mb-3 sm:text-lg">
          {title}
        </h3>
        <p className="mb-4 font-normal sm:mb-6 text-sm/normal sm:text-base/normal line-clamp-3">
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
