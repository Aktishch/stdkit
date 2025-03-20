import { Icon, Image, Loader, Title } from '@components'
import { DialogEvent, DialogRemove, DialogResult } from '@dialogs'
import { useToggle } from '@hooks'
import { BreadCrumbs, Head, HeadButton } from '@views/company/components'
import { useState } from 'react'

export const News = () => {
  const [openDialogEvent, setOpenDialogEvent] = useState(false)
  const [openDialogRemove, setOpenDialogRemove] = useState(false)
  const [openDialogResult, setOpenDialogResult] = useState(false)
  const [editingValue, , , editingToggle] = useToggle(true)
  const routes = [
    { path: '/lk/events', breadcrumb: 'Мероприятия' },
    { path: '/lk/events/news', breadcrumb: 'Новость' },
  ]

  return (
    <>
      <BreadCrumbs routes={routes} />
      <Head>
        <Title>Новость</Title>
        <HeadButton id="pen" onClick={editingToggle}>
          {editingValue ? 'Редактировать' : 'Отмена'}
        </HeadButton>
      </Head>
      <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2 xl:gap-20">
        <div className="w-full sm:max-w-sm lg:max-w-full">
          <div className="-mx-4 pack pack-xl bg-grey dark:bg-black sm:rounded-2xl sm:mx-0">
            <Loader />
            <div className="absolute inset-0 flex items-center justify-center bg-primary">
              <Icon className="w-40 text-white h-11" id="logo" />
            </div>
            <Image className="image" src="/img/pictures/user.jpg" />
          </div>
        </div>
        <div className="flex flex-col">
          {editingValue ? null : (
            <div className="flex flex-col gap-4 mb-6 xs:flex-row xs:items-center">
              <button
                className="w-full btn btn-primary btn-lg btn-fill sm:max-w-60"
                onClick={() => setOpenDialogEvent(true)}
              >
                <Icon className="mr-2 text-2xl" id="pen" />
                Изменить
              </button>
              <button
                className="w-full btn btn-red btn-fade btn-lg sm:max-w-60"
                onClick={() => setOpenDialogRemove(true)}
              >
                <Icon className="mr-2 text-2xl" id="trash" />
                Удалить
              </button>
            </div>
          )}
          <span className="mb-2 text-xs/none sm:text-sm/none opacity-70">29.08.2023</span>
          <Title className="mb-6">Название новости</Title>
          <p className="font-normal text-sm/normal sm:text-base/normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem exercitationem cupiditate sunt
            voluptatibus? Quos, aut. Officiis, quos sit saepe repellendus eum voluptatem, eius, sunt minima similique
            placeat ea aliquid explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            exercitationem cupiditate sunt voluptatibus? Quos, aut. Officiis, quos sit saepe repellendus eum voluptatem,
            eius, sunt minima similique placeat ea aliquid explicabo!
          </p>
          <div className="flex mt-7">
            <a
              className="font-normal underline-offset-4 hover:underline text-sm/normal sm:text-base/normal text-primary"
              draggable={false}
              href=""
              target="_blank"
            >
              https://example.com
            </a>
          </div>
        </div>
      </div>
      <DialogEvent
        open={openDialogEvent}
        onClose={setOpenDialogEvent}
        item={{
          src: '/img/pictures/user.jpg',
          date: '29.08.2023',
          title: 'Название новости',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          url: 'https://example.com',
        }}
        openResult={(): void => setOpenDialogResult(true)}
      />
      <DialogRemove open={openDialogRemove} onClose={setOpenDialogRemove} data="Название новости" />
      <DialogResult open={openDialogResult} onClose={setOpenDialogResult} result={true} />
    </>
  )
}
