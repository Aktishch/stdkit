import { Picture } from '@ui/Picture'
import { Title } from '@views/lk/components/Title'
import { ButtonCopy } from '@views/lk/components/Button/ButtonCopy'
import { ButtonDownload } from '@views/lk/components/Button/ButtonDownload'
import { ButtonAccordion } from '@views/lk/components/Button/ButtonAccordion'
import { Table } from '@views/lk/components/Table/Table'
import { TableElement } from '@views/lk/components/Table/TableElement'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'

export const Portfolio = () => {
  return (
    <ContentElement full={true}>
      <Head>
        <Title>Портфолио</Title>
        <AddButton>Добавить работу</AddButton>
      </Head>
      <Table minWidth="none">
        <TableElement>
          <div className="flex items-center">
            <Picture
              className="mr-3 text-2xl icon"
              src="/img/pictures/pdf.svg"
              loading="eager"
            />
            <span className="text-base font-normal leading-none">
              Договор практики
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ButtonCopy value="dsdsdsdsdsds" />
            <ButtonDownload href="/img/pictures/pdf.svg" />
            <ButtonAccordion />
          </div>
        </TableElement>
      </Table>
      <Pagination />
    </ContentElement>
  )
}
