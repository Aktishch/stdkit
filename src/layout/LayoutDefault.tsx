import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '@components/Theme'
import { Header } from '@layout/Header/Header'
import { Footer } from '@layout/Footer/Footer'
import { Preloader } from '@layout/Preloader/Preloader'

export const LayoutDefault = ({ status = false }: { status: boolean }) => {
  return (
    <Theme>
      <Header status={status} />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Theme>
  )
}
