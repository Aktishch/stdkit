import { apiUrl } from '@/utils/apiUrl'
import axios, { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { COOKIE_TOKEN_NAME } from './const'
import { getCurrentUser } from './api'

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = useState(Cookies.get(COOKIE_TOKEN_NAME) || '')
  const navigate = useNavigate()
  const { data: userData, isLoading } = useQuery({
    queryKey: ['todos', token],
    queryFn: getCurrentUser,
    enabled: !!token,
    retry: false,
    throwOnError() {
      logout()
      return false
    },
  })

  const isLoggedIn = !!token && !!userData?.item

  async function login(formData: LoginPayload) {
    const response = await axios.post<LoginResponse>(
      apiUrl('/mentor/login'),
      formData
    )

    if (response.data) {
      setToken(response.data.data.api_token)
      Cookies.set(COOKIE_TOKEN_NAME, response.data.data.api_token, {
        expires: 7,
      })
    }

    return response
  }

  function logout() {
    setToken('')
    Cookies.remove(COOKIE_TOKEN_NAME)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user: userData?.item, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

type AuthContextValue = {
  isLoggedIn: boolean
  isLoading: boolean
  user?: User
  login: (formData: LoginPayload) => Promise<AxiosResponse<LoginResponse, any>>
  logout: () => void
}
