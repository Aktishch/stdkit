import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '../contexts/Theme'
import { Sidebar } from '../contexts/Sidebar'
import { Header } from '../templates/Header'
import { Menu } from '../templates/Menu'
import { SmartMenu } from '../templates/Smart-menu'
import { ProgressLine } from '../templates/ProgressLine'
import { SocialToggle } from '../templates/SocialToggle'
import { ThemeToggle } from '../templates/ThemeToggle'
import { Snowflakes } from '../templates/Snowflakes'
import { Footer } from '../templates/Footer'
import { Preloader } from '../components/Preloader'

export const Layout = (): React.JSX.Element => {
  return (
    <Theme>
      <ProgressLine />
      <Sidebar>
        <Header />
        <Menu />
      </Sidebar>
      <SmartMenu />
      <SocialToggle />
      <ThemeToggle />
      <Snowflakes />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Theme>
  )
}
