import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loaded, Header, Footer } from '@layout'

export const CompanyLayout = () => {
  return (
    <Suspense fallback={<Loaded />}>
      <Header />
      <section className="container flex-grow sm:pt-10">
        <Outlet />
      </section>
      <Footer />
    </Suspense>
  )
}
