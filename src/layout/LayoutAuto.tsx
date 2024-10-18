import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@layout'
import { Preloader } from '@components'

export const LayoutAuto = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}
