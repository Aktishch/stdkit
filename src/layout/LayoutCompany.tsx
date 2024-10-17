import { Outlet } from 'react-router-dom'

export const LayoutCompany = () => {
  return (
    <section className="container flex-grow sm:pt-10">
      <Outlet />
    </section>
  )
}
