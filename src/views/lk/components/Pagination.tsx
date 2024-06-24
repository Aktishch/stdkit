import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Icon } from '@ui/Icon'
import { PaginationButton } from '@views/lk/components/PaginationButton'

export const Pagination = ({ className }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-6 sm:mt-9',
    className
  )

  return (
    <div className={style}>
      <PaginationButton className="pointer-events-none">
        <Icon id="arrow-left" />
      </PaginationButton>
      <PaginationButton className="pointer-events-none">1</PaginationButton>
      <PaginationButton
        className="text-black text-opacity-50"
        color="grey"
        waved="dark"
      >
        2
      </PaginationButton>
      <PaginationButton
        className="text-black text-opacity-50"
        color="grey"
        waved="dark"
      >
        3
      </PaginationButton>
      <PaginationButton
        className="items-end text-black text-opacity-50"
        color="grey"
        waved="dark"
      >
        ...
      </PaginationButton>
      <PaginationButton
        className="text-black text-opacity-50"
        color="grey"
        waved="dark"
      >
        5
      </PaginationButton>
      <PaginationButton
        className="text-black text-opacity-50"
        color="grey"
        waved="dark"
      >
        <Icon id="arrow-right" />
      </PaginationButton>
    </div>
  )
}
