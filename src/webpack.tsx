import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './templates/Layout'
import './scss/style.scss'

const Index: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Index').then((module) => ({ default: module.Index }))
)

const Second: React.LazyExoticComponent<() => React.JSX.Element> = lazy(() =>
  import('./pages/Second').then((module) => ({ default: module.Second }))
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
        <Route path="/second" element={<Layout />}>
          <Route index element={<Second />} />
        </Route>
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)

// react, class, data, func, use, context, page, temp, inc, comp
