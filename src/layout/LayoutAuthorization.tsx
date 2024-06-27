import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Loaded } from '@layout/Loaded/Loaded'
import { useAuth } from '@/service/auth/AuthContext'
import { Gradient, Screen } from '@/ui'
import { Content } from '@/views/auth/components/Content'

export const LayoutAuthorization = () => {
  const { isLoggedIn, isLoading } = useAuth()
  if (isLoading) return <Loaded />
  if (isLoggedIn) return <Navigate to="/lk-tutor/" />

  return (
    <Screen>
      <Gradient />
      <Content>
        <Suspense fallback={<Loaded />}>
          <Outlet />
        </Suspense>
      </Content>
    </Screen>
  )
}
