import { LayoutAuth, LayoutAuto, LayoutCompany, LayoutLk, LayoutNotFound } from '@layout'
import { Theme } from '@providers'
import { AuthCode, AuthLogin, AuthPassword, AuthRecovery, AuthRegistration } from '@views/auth/pages'
import {
  CompanyDuty,
  CompanyEmployee,
  CompanyEvents,
  CompanyNews,
  CompanyStaff,
  CompanyTime,
} from '@views/company/pages'
import { LkPassword, LkSettings } from '@views/lk/pages'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

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
