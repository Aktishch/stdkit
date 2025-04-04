import { Title } from '@components'
import { DialogEvent, DialogResult } from '@dialogs'
import { EventsType, TSXComponent } from '@utils'
import { BreadCrumbs, Head, HeadButton, Pagination } from '@views/company/components'
import { News } from '@views/company/Events/components'
import { useState } from 'react'

const data: EventsType[] = [
  {
    to: '',
    src: '/img/pictures/user.jpg',
    date: '29.08.2023',
    title: 'Наименование',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, in! Itaque asperiores quia aliquid nostrum cupiditate minus voluptate nisi, nemo accusantium ratione numquam nulla voluptates praesentium, mollitia nobis at ea.',
  },
  {
    to: '',
    src: undefined,
    date: '29.08.2023',
    title: 'Наименование',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, in! Itaque asperiores quia aliquid nostrum cupiditate minus voluptate nisi, nemo accusantium ratione numquam nulla voluptates praesentium, mollitia nobis at ea.',
  },
]

export const Events = (): TSXComponent => {
  const [openDialogEvent, setOpenDialogEvent] = useState(false)
  const [openDialogResult, setOpenDialogResult] = useState(false)
  const routes = [{ path: '/lk/events', breadcrumb: 'Мероприятия' }]

  return (
    <>
      <BreadCrumbs routes={routes} />
      <Head>
        <Title>Мероприятия</Title>
        <HeadButton id="medal" onClick={() => setOpenDialogEvent(true)}>
          Создать
        </HeadButton>
      </Head>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 lg:gap-7">
        {data.map((item, index) => (
          <News item={item} key={index} />
        ))}
      </div>
      <Pagination className="mt-10" />
      <DialogEvent
        open={openDialogEvent}
        onClose={setOpenDialogEvent}
        openResult={(): void => setOpenDialogResult(true)}
      />
      <DialogResult open={openDialogResult} onClose={setOpenDialogResult} result={true} />
    </>
  )
}
