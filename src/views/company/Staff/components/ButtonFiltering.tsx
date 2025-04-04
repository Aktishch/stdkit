import { TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const ButtonFiltering = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): TSXComponent => {
  const style: string = twMerge(
    'py-3 grow sm:grow-0 text-black dark:text-white text-sm sm:text-base btn btn-gray opacity-60 active:transform-none after:content-auto after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-px after:bg-primary after:opacity-0 after:invisible',
    className
  )

  return (
    <button className={style} type="submit" {...props}>
      {children}
    </button>
  )
}
