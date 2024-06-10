import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '@layout/LayoutDefault'
import { LayoutAuthorization } from '@layout/LayoutAuthorization'
import {
  Login,
  Registration,
  Recovery,
  Code,
  Password,
} from '@views/auth/pages'
import { TutorSettings } from '@views/lk/tutor/pages'
import './scss/main.scss'

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
        </Route>
        <Route path="/lk-tutor" element={<LayoutDefault status={true} />}>
          <Route index element={<TutorSettings />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)
