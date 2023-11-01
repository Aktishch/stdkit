import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '../contexts/Theme'
import { Header } from './Header'
import { Menu } from './Menu'
import { ProgressLine } from '../components/ProgressLine'
import { SocialToggle } from '../components/SocialToggle'
import { Sidebar } from '../contexts/Sidebar'
import { Preloader } from '../components/Preloader'

export const Layout = (): React.JSX.Element => {
  return (
    <Theme>
      <ProgressLine />
      <Sidebar>
        <Header />
        <Menu />
      </Sidebar>
      <SocialToggle />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </Theme>
  )
}
