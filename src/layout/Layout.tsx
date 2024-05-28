import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '../contexts/Theme'
import { Header } from './Header'
import { Footer } from './Footer'
import { Preloader } from './Preloader'

interface LayoutProps {
  status?: boolean
}

export const LayoutAuthorization = (): React.JSX.Element => {
  return (
    <Theme>
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </Theme>
  )
}

export const LayoutDefault = ({ status = false }: LayoutProps): React.JSX.Element => {
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
