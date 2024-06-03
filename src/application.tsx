// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutAuthorization, LayoutDefault } from '@layout/Layout'
import {
  Login,
  Registration,
  Recovery,
  Code,
  Password,
} from '@views/auth/pages'
import { TutorSettings } from '@views/tutor/pages'
import './scss/main.scss'

// const Login: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
//   import('@views/auth/Login/Login').then((module) => ({
//     default: module.Login,
//   }))
// )

// const Registration: React.LazyExoticComponent<() => React.JSX.Element> = lazy(
//   () =>
//     import('./pages/auth/Registration').then((module) => ({
//       default: module.Registration,
//     }))
// )

// const Recovery: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
//   import('./pages/auth/Recovery').then((module) => ({
//     default: module.Recovery,
//   }))
// )

// const Code: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
//   import('./pages/auth/Code').then((module) => ({ default: module.Code }))
// )

// const Password: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
//   import('./pages/auth/Password').then((module) => ({
//     default: module.Password,
//   }))
// )

// const LkTutor: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
//   import('./pages/lk-tutor/LkTutor').then((module) => ({
//     default: module.LkTutor,
//   }))
// )

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = document.getElementById('root') as HTMLElement

  if (!root) return

  const createRoot = ReactDOM.createRoot(root)

  createRoot.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAuthorization />}>
          <Route index element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="code" element={<Code />} />
          <Route path="password" element={<Password />} />
          {/*
          <Route path="recovery" element={<Recovery />} />
          <Route path="code" element={<Code />} />
          <Route path="password" element={<Password />} /> */}
        </Route>
        <Route path="/lk-tutor" element={<LayoutDefault status={true} />}>
          <Route index element={<TutorSettings />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)
