import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Theme } from '@providers/Theme'
import { Loaded } from '@layout/Loaded/Loaded'
import { useAuth } from '@/providers/Auth'

export const LayoutAuthorization = () => {
  const { token } = useAuth()
  if (token) return <Navigate to="/lk-tutor/" />

  return (
    <Theme>
      <Suspense fallback={<Loaded />}>
        <Outlet />
      </Suspense>
    </Theme>
  )
}
