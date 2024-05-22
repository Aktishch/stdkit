import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './templates/Layout'
import './scss/main.scss'

const Index: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Index').then((module) => ({ default: module.Index }))
)

const Registration: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Registration').then((module) => ({ default: module.Registration }))
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
        <Route path="/registration" element={<Layout />}>
          <Route index element={<Registration />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)

// react, class, data, func, use, context, page, temp, inc, comp
