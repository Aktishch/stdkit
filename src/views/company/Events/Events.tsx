import { Title, Image, Loader } from '@components'
import { Head, HeadButton, Pagination } from '@views/company/components'

export const Events = () => {
  return (
    <>
      <Head>
        <Title>Мероприятия</Title>
        <HeadButton id="medal">Создать</HeadButton>
      </Head>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 lg:gap-7">
        <div className="card dark:bg-dark">
          <div className="pack pack-md bg-grey dark:bg-black">
            <Loader />
            <Image className="image" src="/img/pictures/user.jpg" />
          </div>
          <div className="px-4 py-4 sm:py-6 card-content">
            <h3 className="mb-1 text-base font-medium sm:mb-3 sm:text-lg">
              Наименование
            </h3>
            <p className="mb-4 font-normal sm:mb-6 text-sm/normal sm:text-base/normal line-clamp-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              in! Itaque asperiores quia aliquid nostrum cupiditate minus
              voluptate nisi, nemo accusantium ratione numquam nulla voluptates
              praesentium, mollitia nobis at ea.
            </p>
            <button className="btn btn-primary btn-md btn-fill">Читать</button>
          </div>
        </div>
      </div>
      <Pagination className="mt-10" />
    </>
  )
}
