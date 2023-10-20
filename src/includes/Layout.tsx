import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Preloader } from '../components/Preloader'

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/second">Second</Link>
      </header> */}
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  )
}
