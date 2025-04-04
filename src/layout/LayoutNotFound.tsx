import { Preloader } from '@components'
import { TSXComponent } from '@utils'
import { Suspense } from 'react'
import { Link } from 'react-router-dom'

export const LayoutNotFound = (): TSXComponent => {
  return (
    <Suspense fallback={<Preloader />}>
      <section className="container flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white dark:from-dark to-primary/50 dark:to-primary">
        <h1 className="font-bold text-primary text-9xl md:text-[14rem]">404</h1>
        <p className="font-normal text-sm/normal sm:text-base/normal opacity-80 mb-9">
          Возможно, запрашиваемая Вами страница была перенесена или удалена. <br className="hidden md:block" />
          Либо Вы допустили небольшую опечатку при вводе адреса.
        </p>
        <Link className="btn btn-primary btn-lg btn-fill" draggable={false} to="/lk/">
          Вернуться на главную
        </Link>
      </section>
    </Suspense>
  )
}
