import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import './scss/main.scss'

const Index: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Index').then((module) => ({ default: module.Index }))
)

const Registration: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Registration').then((module) => ({ default: module.Registration }))
)

const PasswordEmail: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/PasswordEmail').then((module) => ({ default: module.PasswordEmail }))
)

const PasswordCode: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/PasswordCode').then((module) => ({ default: module.PasswordCode }))
)

const PasswordNew: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/PasswordNew').then((module) => ({ default: module.PasswordNew }))
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
        <Route path="/password-email" element={<Layout auth={false} />}>
          <Route index element={<PasswordEmail />} />
        </Route>
        <Route path="/password-code" element={<Layout auth={false} />}>
          <Route index element={<PasswordCode />} />
        </Route>
        <Route path="/password-new" element={<Layout auth={false} />}>
          <Route index element={<PasswordNew />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)

// react, class, data, func, use, context, page, temp, inc, comp
