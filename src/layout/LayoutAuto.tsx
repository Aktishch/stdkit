import { Preloader } from '@components'
import { Footer, Header } from '@layout'
import { TSXComponent } from '@utils'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutAuto = (): TSXComponent => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}
