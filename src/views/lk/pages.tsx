import { lazy } from 'react'

export const LkSettings = lazy(() =>
  import('@views/lk/Settings/Settings').then((module) => ({
    default: module.Settings,
  }))
)

export const LkPassword = lazy(() =>
  import('@views/lk/Password/Password').then((module) => ({
    default: module.Password,
  }))
)
