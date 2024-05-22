import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// import { Theme } from '../contexts/Theme'
// import { Sidebar } from '../contexts/Sidebar'
// import { Header } from './Header'
// import { Menu } from './Menu'
// import { ThemeToggle } from './ThemeToggle'
// import { Footer } from './Footer'
import { Preloader } from './Preloader'

export const Layout = (): React.JSX.Element => {
  return (
    <>
      {/* <Sidebar>
        <Header />
        <Menu />
      </Sidebar> */}
      {/* <ThemeToggle /> */}
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  )
}
