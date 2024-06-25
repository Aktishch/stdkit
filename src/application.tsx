import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { LayoutAuthorization } from '@layout/LayoutAuthorization'
import { LayoutDefault } from '@layout/LayoutDefault'
import { LayoutNotFound } from '@layout/LayoutNotFound'
import { LayoutTutor } from '@views/lk/tutor/layout/LayoutTutor'
import { LayoutStudentDetail } from '@views/lk/tutor/layout/LayoutStudentDetail'
import {
  AuthLogin,
  AuthRegistration,
  AuthRecovery,
  AuthCode,
  AuthPassword,
} from '@views/auth/pages'
import {
  TutorSettings,
  TutorPassword,
  TutorTasks,
  TutorStudents,
  StudentDetail,
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
          <Route path="login" element={<Navigate to="/login/student" />} />
          <Route path="login/:mode" element={<AuthLogin />} />
          <Route path="registration" element={<AuthRegistration />} />
          <Route path="recovery" element={<AuthRecovery />} />
          <Route path="code" element={<AuthCode />} />
          <Route path="password" element={<AuthPassword />} />
        </Route>
        <Route path="/lk-tutor/" element={<LayoutDefault status={true} />}>
          <Route element={<LayoutTutor />}>
            <Route index element={<Navigate to="settings" />} />
            <Route path="settings" element={<TutorSettings />} />
            <Route path="password" element={<TutorPassword />} />
          </Route>
          <Route path="tasks" element={<TutorTasks />} />
          <Route path="students" element={<TutorStudents />} />
          <Route path="students/:studentId" element={<LayoutStudentDetail />}>
            <Route path="detail" element={<StudentDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<LayoutNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}) as EventListener)
