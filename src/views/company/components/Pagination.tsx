import { Icon } from '@components'
import { Props, TSXComponent } from '@utils'
import { PaginationButton } from '@views/company/components'
import { twMerge } from 'tailwind-merge'

export const Pagination = ({ className }: Props): TSXComponent => {
  const style: string = twMerge('flex items-center justify-center sm:justify-stretch gap-2 sm:gap-3', className)

  return (
    <div className={style}>
      <PaginationButton className="pointer-events-none btn-fill">
        <Icon className="text-sm" id="arrow-left" />
      </PaginationButton>
      <PaginationButton className="pointer-events-none btn-fill">1</PaginationButton>
      <PaginationButton className="btn-fade">2</PaginationButton>
      <PaginationButton className="btn-fade">3</PaginationButton>
      <PaginationButton className="btn-fade">4</PaginationButton>
      <PaginationButton className="btn-fade">...</PaginationButton>
      <PaginationButton className="btn-fade">27</PaginationButton>
      <PaginationButton className="btn-fade">
        <Icon className="text-sm" id="arrow-right" />
      </PaginationButton>
    </div>
  )
}
