import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '@providers/Theme'
import { Loaded } from '@layout/Loaded/Loaded'

export const LayoutAuthorization = () => {
  return (
    <Theme>
      <Suspense fallback={<Loaded />}>
        <Outlet />
      </Suspense>
    </Theme>
  )
}
