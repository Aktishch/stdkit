import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Menu } from './Menu'
import { ProgressLine } from '../components/ProgressLine'
import { Sidebar } from '../components/Sidebar'
import { Preloader } from '../components/Preloader'

export const Layout = () => {
  return (
    <>
      <ProgressLine />
      <Sidebar>
        <Header />
        <Menu />
      </Sidebar>
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  )
}
