import { useState } from 'react'
import { Title, Image, Loader } from '@components'
import { DialogEvent, DialogResult } from '@dialogs'
import {
  BreadCrumbs,
  BreadCrumbsItem,
  Head,
  HeadButton,
} from '@views/company/components'

export const News = () => {
  const [openDialogEvent, setOpenDialogEvent] = useState(false)
  const [openDialogResult, setOpenDialogResult] = useState(false)

  return (
    <>
      <BreadCrumbs>
        <BreadCrumbsItem to="/lk/events/">Мероприятия</BreadCrumbsItem>
        <BreadCrumbsItem to="/lk/events/news/">Новость</BreadCrumbsItem>
      </BreadCrumbs>
      <Head>
        <Title>Новость</Title>
        <HeadButton id="pen" onClick={() => setOpenDialogEvent(true)}>
          Редактировать
        </HeadButton>
      </Head>
      <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2 xl:gap-20">
        <div className="w-full sm:max-w-sm lg:max-w-full">
          <div className="-mx-4 pack pack-xl bg-grey dark:bg-black sm:rounded-2xl sm:mx-0">
            <Loader />
            <Image className="image" src="/img/pictures/user.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-2 text-xs/none sm:text-sm/none opacity-70">
            29.08.2023
          </span>
          <Title className="mb-6">Название новости</Title>
          <p className="font-normal text-sm/normal sm:text-base/normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            exercitationem cupiditate sunt voluptatibus? Quos, aut. Officiis,
            quos sit saepe repellendus eum voluptatem, eius, sunt minima
            similique placeat ea aliquid explicabo! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quidem exercitationem cupiditate sunt
            voluptatibus? Quos, aut. Officiis, quos sit saepe repellendus eum
            voluptatem, eius, sunt minima similique placeat ea aliquid
            explicabo!
          </p>
        </div>
      </div>
      <DialogEvent
        open={openDialogEvent}
        onClose={setOpenDialogEvent}
        openResult={(): void => setOpenDialogResult(true)}
      />
      <DialogResult
        open={openDialogResult}
        onClose={setOpenDialogResult}
        result={true}
      />
    </>
  )
}
