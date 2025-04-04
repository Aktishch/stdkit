import { TSXComponent } from '@utils'
import { Outlet } from 'react-router-dom'

export const LayoutCompany = (): TSXComponent => {
  return (
    <section className="container grow sm:pt-10">
      <Outlet />
    </section>
  )
}
