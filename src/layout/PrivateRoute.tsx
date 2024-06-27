import { useAuth } from '@/service/auth/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { Loaded } from './Loaded/Loaded'

export function PrivateRoute() {
  const { isLoggedIn, isLoading } = useAuth()
  if (isLoading) return <Loaded />
  if (!isLoggedIn) return <Navigate to="/login" />
  return <Outlet />
}
