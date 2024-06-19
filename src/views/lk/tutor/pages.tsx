import { lazy } from 'react'

export const TutorSettings = lazy(() =>
  import('@views/lk/tutor/TutorSettings/TutorSettings').then((module) => ({
    default: module.TutorSettings,
  }))
)

export const TutorPassword = lazy(() =>
  import('@views/lk/tutor/TutorPassword/TutorPassword').then((module) => ({
    default: module.TutorPassword,
  }))
)
