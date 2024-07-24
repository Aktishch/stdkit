import { lazy } from 'react'

export const AuthLogin = lazy(() =>
  import('@views/auth/Login/Login').then((module) => ({
    default: module.Login,
  }))
)

export const AuthRegistration = lazy(() =>
  import('@views/auth/Registration/Registration').then((module) => ({
    default: module.Registration,
  }))
)

export const AuthRecovery = lazy(() =>
  import('@views/auth/Recovery/Recovery').then((module) => ({
    default: module.Recovery,
  }))
)

export const AuthCode = lazy(() =>
  import('@views/auth/Code/Code').then((module) => ({
    default: module.Code,
  }))
)

export const AuthPassword = lazy(() =>
  import('@views/auth/Password/Password').then((module) => ({
    default: module.Password,
  }))
)
