import { lazy } from 'react'

export const CompanyStaff = lazy(() =>
  import('@views/company/Staff/Staff').then((module) => ({
    default: module.Staff,
  }))
)

export const CompanyEmployee = lazy(() =>
  import('@views/company/Employee/Employee').then((module) => ({
    default: module.Employee,
  }))
)

export const CompanyDuty = lazy(() =>
  import('@views/company/Duty/Duty').then((module) => ({
    default: module.Duty,
  }))
)

export const CompanyTime = lazy(() =>
  import('@views/company/Time/Time').then((module) => ({
    default: module.Time,
  }))
)

export const CompanyEvents = lazy(() =>
  import('@views/company/Events/Events').then((module) => ({
    default: module.Events,
  }))
)

export const CompanyNews = lazy(() =>
  import('@views/company/News/News').then((module) => ({
    default: module.News,
  }))
)
