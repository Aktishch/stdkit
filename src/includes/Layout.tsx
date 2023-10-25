import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ProgressLine } from '../components/ProgressLine'
import { Header } from './Header'
import { Preloader } from '../components/Preloader'

export const Layout = () => {
  return (
    <>
      <ProgressLine />
      <Header />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <footer>Footer</footer>
    </>
  )
}
