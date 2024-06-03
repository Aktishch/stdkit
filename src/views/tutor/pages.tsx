import { lazy } from 'react'

export const TutorSettings: React.LazyExoticComponent<() => React.JSX.Element> =
  lazy(() =>
    import('@views/tutor/TutorSettings/TutorSettings').then((module) => ({
      default: module.TutorSettings,
    }))
  )