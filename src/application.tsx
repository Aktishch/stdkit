import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { LayoutAuthorization } from '@layout/LayoutAuthorization'
import { LayoutDefault } from '@layout/LayoutDefault'
import { LayoutNotFound } from '@layout/LayoutNotFound'
import {
  Login,
  Registration,
  Recovery,
  Code,
  Password,
} from '@views/auth/pages'
import {
  TutorSettings,
  TutorPassword,
  TutorStudents,
} from '@views/lk/tutor/pages'
import './scss/main.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = document.getElementById('root') as HTMLElement

  if (!root) return

  const createRoot = ReactDOM.createRoot(root)

  createRoot.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAuthorization />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="code" element={<Code />} />
          <Route path="password" element={<Password />} />
        </Route>
        <Route path="/lk-tutor/" element={<LayoutDefault status={true} />}>
          <Route index element={<Navigate to="settings" />} />
          <Route path="settings" element={<TutorSettings />} />
          <Route path="password" element={<TutorPassword />} />
          <Route path="students" element={<TutorStudents />} />
        </Route>
        <Route path="*" element={<LayoutNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)
