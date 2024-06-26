type LoginPayload = {
  login: string
  password: string
}

type LoginResponse = {
  data: {
    api_token: string
  }
  message: string
}

type LoginError = {
  message: string
  errors: {
    login: string[]
    password: string[]
  }
}
