import { LazyComponent, LazyDefault, LazyPromise } from '@utils'
import { lazy } from 'react'

export const AuthLogin = lazy(
  (): LazyPromise =>
    import('@views/auth/Login/Login').then(
      (module): LazyDefault => ({
        default: module.Login,
      })
    )
) as LazyComponent

export const AuthRegistration = lazy(
  (): LazyPromise =>
    import('@views/auth/Registration/Registration').then(
      (module): LazyDefault => ({
        default: module.Registration,
      })
    )
) as LazyComponent

export const AuthRecovery = lazy(
  (): LazyPromise =>
    import('@views/auth/Recovery/Recovery').then(
      (module): LazyDefault => ({
        default: module.Recovery,
      })
    )
) as LazyComponent

export const AuthCode = lazy(
  (): LazyPromise =>
    import('@views/auth/Code/Code').then(
      (module): LazyDefault => ({
        default: module.Code,
      })
    )
) as LazyComponent

export const AuthPassword = lazy(
  (): LazyPromise =>
    import('@views/auth/Password/Password').then(
      (module): LazyDefault => ({
        default: module.Password,
      })
    )
) as LazyComponent
