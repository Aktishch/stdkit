import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '@components/Theme'
import { Preloader } from '@layout/Preloader/Preloader'

export const LayoutAuthorization = () => {
  return (
    <Theme>
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </Theme>
  )
}
