import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Theme } from '@providers'
import {
  LayoutAuth,
  LayoutAuto,
  LayoutLk,
  LayoutCompany,
  LayoutNotFound,
} from '@layout'
import {
  AuthLogin,
  AuthRegistration,
  AuthRecovery,
  AuthCode,
  AuthPassword,
} from '@views/auth/pages'
import { LkSettings, LkPassword } from '@views/lk/pages'
import {
  CompanyStaff,
  CompanyEmployee,
  CompanyDuty,
  CompanyTime,
  CompanyEvents,
  CompanyNews,
} from '@views/company/pages'

import 'react-calendar/dist/Calendar.css'
import './scss/main.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = document.getElementById('root') as HTMLElement

  if (!root) return

  const createRoot: ReactDOM.Root = ReactDOM.createRoot(root)

  createRoot.render(
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<AuthLogin />} />
            <Route path="registration" element={<AuthRegistration />} />
            <Route path="recovery" element={<AuthRecovery />} />
            <Route path="code" element={<AuthCode />} />
            <Route path="password" element={<AuthPassword />} />
          </Route>
          <Route path="/lk" element={<LayoutAuto />}>
            <Route element={<LayoutLk />}>
              <Route index element={<Navigate to="settings" />} />
              <Route path="settings" element={<LkSettings />} />
              <Route path="password" element={<LkPassword />} />
            </Route>
            <Route element={<LayoutCompany />}>
              <Route path="staff">
                <Route index element={<CompanyStaff />} />
                <Route path="employee" element={<CompanyEmployee />} />
              </Route>
              <Route path="duty" element={<CompanyDuty />} />
              <Route path="time" element={<CompanyTime />} />
              <Route path="events">
                <Route index element={<CompanyEvents />} />
                <Route path="news" element={<CompanyNews />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<LayoutNotFound />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}) as EventListener)
