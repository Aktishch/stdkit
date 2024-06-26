import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIE_TOKEN_NAME } from './const'
import { apiUrl } from '@/utils/apiUrl'

export async function getCurrentUser() {
  const { data } = await axios.get<CurrentUserResponse>(
    apiUrl('/support/get_user'),
    {
      params: {
        api_token: Cookies.get(COOKIE_TOKEN_NAME),
      },
    }
  )
  return data.data
}

type CurrentUserResponse = {
  data: {
    item: User
  }
}
