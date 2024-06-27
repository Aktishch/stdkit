import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Picture } from '@ui/Picture'
import { ButtonCopy } from '@views/lk/components/Button/ButtonCopy'
import { ButtonDownload } from '@views/lk/components/Button/ButtonDownload'
import { ButtonAccordion } from '@views/lk/components/Button/ButtonAccordion'
import { Table } from '@views/lk/components/Table/Table'
import { TableElement } from '@views/lk/components/Table/TableElement'

interface TablePortfolioProps extends Props {
  data: {
    src: string
    title: string
    copy: string | null
    download: string | null
  }[]
}

export const TablePortfolio = ({ className, data }: TablePortfolioProps) => {
  const style: string = twMerge(className)

  return (
    <Table className={style} minWidth="none">
      {data.map((item, index) => (
        <TableElement key={index}>
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <Picture
                className="mr-3 text-2xl icon"
                src={item.src}
                loading="eager"
              />
              <span className="text-base font-normal leading-none">
                {item.title}
              </span>
            </div>
            <div className="flex items-center gap-4">
              {item.copy !== null ? <ButtonCopy value={item.copy} /> : ''}
              {item.download !== null ? (
                <ButtonDownload href={item.download} />
              ) : (
                ''
              )}
              <ButtonAccordion />
            </div>
          </div>
        </TableElement>
      ))}
    </Table>
  )
}
