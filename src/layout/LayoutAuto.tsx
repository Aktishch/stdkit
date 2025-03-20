import { Preloader } from '@components'
import { Footer, Header } from '@layout'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const LayoutAuto = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}
