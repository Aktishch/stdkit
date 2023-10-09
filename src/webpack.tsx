import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './scss/style.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = ReactDOM.createRoot(document.getElementById('root'))

  root.render(<App />)
}) as EventListener)
