import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './includes/Layout'
// import { Index } from './pages/Index'

import './scss/style.scss'

export const Index = lazy(() => import('./pages/Index').then((m) => ({ default: m.Index })))

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
        {/* <Route path="Second" element={<Second />} />
          <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)
