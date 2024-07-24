import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loaded, Header, Sidebar, Footer } from '@layout'

export const LkLayout = () => {
  return (
    <Suspense fallback={<Loaded />}>
      <Header />
      <section className="container flex flex-col flex-grow gap-6 sm:gap-10 md:flex-row lg:gap-20 sm:pt-10">
        <Sidebar />
        <div className="w-full lg:max-w-md">
          <Outlet />
        </div>
      </section>
      <Footer />
    </Suspense>
  )
}
