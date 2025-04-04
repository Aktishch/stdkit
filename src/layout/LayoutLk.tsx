import { Sidebar } from '@layout'
import { TSXComponent } from '@utils'
import { Outlet } from 'react-router-dom'

export const LayoutLk = (): TSXComponent => {
  return (
    <section className="container flex flex-col grow gap-6 sm:gap-10 md:flex-row lg:gap-20 sm:pt-10">
      <Sidebar />
      <div className="w-full lg:max-w-md">
        <Outlet />
      </div>
    </section>
  )
}
