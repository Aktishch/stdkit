import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '@providers/Theme'
import { Header } from '@layout/Header/Header'
import { Footer } from '@layout/Footer/Footer'
import { Loaded } from '@layout/Loaded/Loaded'

export const LayoutDefault = ({ status = false }: { status: boolean }) => {
  return (
    <Theme>
      <Header status={status} />
      <Suspense fallback={<Loaded />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Theme>
  )
}
