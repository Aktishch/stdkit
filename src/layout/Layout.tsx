import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '../contexts/Theme'
import { Header } from './Header'
import { Footer } from './Footer'
import { Preloader } from './Preloader'

interface LayoutProps {
  auth?: boolean
  student?: boolean
}

export const Layout = ({ auth = true, student = false }: LayoutProps): React.JSX.Element => {
  return (
    <Theme>
      {auth ? <Header /> : ''}
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      {auth ? <Footer /> : ''}
    </Theme>
  )
}
