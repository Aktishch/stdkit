import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import './scss/main.scss'

const Index: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/auth/Index').then((module) => ({ default: module.Index }))
)

const Registration: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/auth/Registration').then((module) => ({ default: module.Registration }))
)

const Recovery: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/auth/Recovery').then((module) => ({ default: module.Recovery }))
)

const Code: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/auth/Code').then((module) => ({ default: module.Code }))
)

const Password: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/auth/Password').then((module) => ({ default: module.Password }))
)

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = document.getElementById('root') as HTMLElement

  if (!root) return

  const createRoot = ReactDOM.createRoot(root)

  createRoot.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/registration" element={<Layout auth={false} />}>
          <Route index element={<Registration />} />
        </Route>
        <Route path="/recovery" element={<Layout auth={false} />}>
          <Route index element={<Recovery />} />
        </Route>
        <Route path="/code" element={<Layout auth={false} />}>
          <Route index element={<Code />} />
        </Route>
        <Route path="/password" element={<Layout auth={false} />}>
          <Route index element={<Password />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)

// react, class, data, func, use, context, page, temp, inc, comp
