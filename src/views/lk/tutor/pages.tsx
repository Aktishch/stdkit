import { lazy } from 'react'

export const TutorSettings = lazy(() =>
  import('@views/lk/tutor/TutorSettings/TutorSettings').then((module) => ({
    default: module.TutorSettings,
  }))
)
