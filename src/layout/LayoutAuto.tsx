import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loaded, Header, Footer } from '@layout'

export const LayoutAuto = () => {
  return (
    <Suspense fallback={<Loaded />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}
