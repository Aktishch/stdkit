import { lazy } from 'react'

export const Login: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () =>
    import('@views/auth/Login/Login').then((module) => ({
      default: module.Login,
    }))
)

export const Registration: React.LazyExoticComponent<() => React.JSX.Element> =
  lazy(() =>
    import('@views/auth/Registration/Registration').then((module) => ({
      default: module.Registration,
    }))
  )

export const Recovery: React.LazyExoticComponent<() => React.JSX.Element> =
  lazy(() =>
    import('@views/auth/Recovery/Recovery').then((module) => ({
      default: module.Recovery,
    }))
  )

export const Code: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
  () =>
    import('@views/auth/Code/Code').then((module) => ({
      default: module.Code,
    }))
)

export const Password: React.LazyExoticComponent<() => React.JSX.Element> =
  lazy(() =>
    import('@views/auth/Password/Password').then((module) => ({
      default: module.Password,
    }))
  )
