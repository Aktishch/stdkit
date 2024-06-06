import { lazy } from 'react'

export const TutorSettings: React.LazyExoticComponent<() => React.JSX.Element> =
  lazy(() =>
    import('@views/lk/tutor/TutorSettings/TutorSettingsTest').then(
      (module) => ({
        default: module.TutorSettings,
      })
    )
  )
