import { apiUrl } from '@/utils/apiUrl'
import axios, { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const COOKIE_TOKEN_NAME = 'auth-token'

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = useState(Cookies.get(COOKIE_TOKEN_NAME) || '')
  const navigate = useNavigate()

  const login = async (formData: LoginPayload) => {
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

  const logout = () => {
    setToken('')
    Cookies.remove(COOKIE_TOKEN_NAME)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

type AuthContextValue = {
  token: string
  login: (formData: LoginPayload) => Promise<AxiosResponse<LoginResponse, any>>
  logout: () => void
}
