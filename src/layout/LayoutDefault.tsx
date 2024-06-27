import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@layout/Header/Header'
import { Footer } from '@layout/Footer/Footer'
import { Loaded } from '@layout/Loaded/Loaded'

export const LayoutDefault = () => {
  return (
    <>
      <Header status={true} />
      <Suspense fallback={<Loaded />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
