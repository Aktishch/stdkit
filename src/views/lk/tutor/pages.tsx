import { lazy } from 'react'

export const TutorSettings = lazy(() =>
  import('@views/lk/tutor/Settings/Settings').then((module) => ({
    default: module.Settings,
  }))
)

export const TutorPassword = lazy(() =>
  import('@views/lk/tutor/Password/Password').then((module) => ({
    default: module.Password,
  }))
)

export const TutorTasks = lazy(() =>
  import('@views/lk/tutor/Tasks/Tasks').then((module) => ({
    default: module.Tasks,
  }))
)

export const TutorStudents = lazy(() =>
  import('@views/lk/tutor/Students/List/List').then((module) => ({
    default: module.List,
  }))
)

export const StudentDetail = lazy(() =>
  import('@views/lk/tutor/Students/Detail/Detail').then((module) => ({
    default: module.Detail,
  }))
)

export const StudentDetailTasks = lazy(() =>
  import('@views/lk/tutor/Students/Tasks/Tasks').then((module) => ({
    default: module.Tasks,
  }))
)

export const StudentDetailPortfolio = lazy(() =>
  import('@views/lk/tutor/Students/Portfolio/Portfolio').then((module) => ({
    default: module.Portfolio,
  }))
)
