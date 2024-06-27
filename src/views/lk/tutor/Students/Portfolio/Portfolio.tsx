import { Title } from '@views/lk/components/Title'
import { TablePortfolio } from '@views/lk/components/TablePortfolio'
import { ContentElement } from '@views/lk/components/Content/ContentElement'
import { Pagination } from '@views/lk/components/Pagination/Pagination'
import { Head } from '@views/lk/tutor/components/Head'
import { AddButton } from '@views/lk/tutor/components/AddButton'

const data = [
  {
    src: '/img/pictures/pdf.svg',
    title: 'Договор практики',
    copy: 'dsdsdsdsdsds',
    download: '/img/pictures/pdf.svg',
  },
  {
    src: '/img/pictures/pdf.svg',
    title: 'Договор практики',
    copy: null,
    download: '/img/pictures/pdf.svg',
  },
  {
    src: '/img/pictures/pdf.svg',
    title: 'Договор практики',
    copy: 'dsdsdsdsdsds',
    download: null,
  },
]

export const Portfolio = () => {
  return (
    <ContentElement full={true}>
      <Head>
        <Title>Портфолио</Title>
        <AddButton>Добавить работу</AddButton>
      </Head>
      <TablePortfolio data={data} />
      <Pagination />
    </ContentElement>
  )
}
