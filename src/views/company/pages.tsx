import { LazyComponent, LazyDefault, LazyPromise } from '@utils'
import { lazy } from 'react'

export const CompanyStaff = lazy(
  (): LazyPromise =>
    import('@views/company/Staff/Staff').then(
      (module): LazyDefault => ({
        default: module.Staff,
      })
    )
) as LazyComponent

export const CompanyEmployee = lazy(
  (): LazyPromise =>
    import('@views/company/Employee/Employee').then(
      (module): LazyDefault => ({
        default: module.Employee,
      })
    )
) as LazyComponent

export const CompanyDuty = lazy(
  (): LazyPromise =>
    import('@views/company/Duty/Duty').then(
      (module): LazyDefault => ({
        default: module.Duty,
      })
    )
) as LazyComponent

export const CompanyTime = lazy(
  (): LazyPromise =>
    import('@views/company/Time/Time').then(
      (module): LazyDefault => ({
        default: module.Time,
      })
    )
) as LazyComponent

export const CompanyEvents = lazy(
  (): LazyPromise =>
    import('@views/company/Events/Events').then(
      (module): LazyDefault => ({
        default: module.Events,
      })
    )
) as LazyComponent

export const CompanyNews = lazy(
  (): LazyPromise =>
    import('@views/company/News/News').then(
      (module): LazyDefault => ({
        default: module.News,
      })
    )
) as LazyComponent
