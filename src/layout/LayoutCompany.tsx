import { Outlet } from 'react-router-dom'

export const LayoutCompany = () => {
  return (
    <section className="container grow sm:pt-10">
      <Outlet />
    </section>
  )
}
