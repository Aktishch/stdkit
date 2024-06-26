import { useAuth } from '@/service/auth/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
  const { token } = useAuth()
  if (!token) return <Navigate to="/login" />
  return <Outlet />
}
