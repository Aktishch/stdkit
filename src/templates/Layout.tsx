import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '../contexts/Theme'
import { Sidebar } from '../contexts/Sidebar'
import { Header } from './Header'
import { Menu } from './Menu'
import { ProgressLine } from './ProgressLine'
import { SocialToggle } from './SocialToggle'
import { ThemeToggle } from './ThemeToggle'
import { Snowflakes } from './Snowflakes'
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
      <ThemeToggle />
      <Snowflakes />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </Theme>
  )
}
