import { LazyComponent, LazyDefault, LazyPromise } from '@utils'
import { lazy } from 'react'

export const LkSettings = lazy(
  (): LazyPromise =>
    import('@views/lk/Settings/Settings').then(
      (module): LazyDefault => ({
        default: module.Settings,
      })
    )
) as LazyComponent

export const LkPassword = lazy(
  (): LazyPromise =>
    import('@views/lk/Password/Password').then(
      (module): LazyDefault => ({
        default: module.Password,
      })
    )
) as LazyComponent
