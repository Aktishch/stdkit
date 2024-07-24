import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Theme } from '@providers'
import { AuthLayout, LkLayout } from '@layout'
// import { LayoutAuthorization } from '@layout/LayoutAuthorization'
// import { LayoutDefault } from '@layout/LayoutDefault'
// import { LayoutNotFound } from '@layout/LayoutNotFound'
// import { LayoutTutor } from '@views/lk/tutor/layout/LayoutTutor'
// import { LayoutStudentDetail } from '@views/lk/tutor/layout/LayoutStudentDetail'
import {
  AuthLogin,
  AuthRegistration,
  AuthRecovery,
  AuthCode,
  AuthPassword,
} from '@views/auth/pages'
import { LkSettings, LkPassword } from '@views/lk/pages'
// import { ToastContainer } from './ui/Toast'
// import { createPortal } from 'react-dom'
import './scss/main.scss'
// import { PrivateRoute } from './layout/PrivateRoute'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { AuthProvider } from './service/auth/AuthContext'
// import { Theme } from './providers/Theme'

// const queryClient = new QueryClient()

window.addEventListener('DOMContentLoaded', ((): void => {
  const root = document.getElementById('root') as HTMLElement

  if (!root) return

  const createRoot: ReactDOM.Root = ReactDOM.createRoot(root)

  createRoot.render(
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<AuthLogin />} />
            <Route path="registration" element={<AuthRegistration />} />
            <Route path="recovery" element={<AuthRecovery />} />
            <Route path="code" element={<AuthCode />} />
            <Route path="password" element={<AuthPassword />} />
          </Route>
          <Route path="/lk/" element={<LkLayout />}>
            <Route index element={<Navigate to="settings" />} />
            <Route path="settings" element={<LkSettings />} />
            <Route path="password" element={<LkPassword />} />
          </Route>
        </Routes>
        {/* <Theme>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<LayoutAuthorization />}>
                  <Route index element={<Navigate to="login" />} />
                  <Route
                    path="login"
                    element={<Navigate to="/login/student" />}
                  />
                  <Route path="login/:mode" element={<AuthLogin />} />
                  <Route path="registration" element={<AuthRegistration />} />
                  <Route path="recovery" element={<AuthRecovery />} />
                  <Route path="code" element={<AuthCode />} />
                  <Route path="password" element={<AuthPassword />} />
                </Route>
                <Route path="/lk-tutor/" element={<LayoutDefault />}>
                  <Route element={<PrivateRoute />}>
                    <Route index element={<Navigate to="settings" />} />
                    <Route element={<LayoutTutor />}>
                      <Route path="settings" element={<TutorSettings />} />
                      <Route path="password" element={<TutorPassword />} />
                    </Route>
                    <Route path="tasks" element={<TutorTasks />} />
                    <Route path="students" element={<TutorStudents />} />
                    <Route
                      path="students/:studentId"
                      element={<LayoutStudentDetail />}
                    >
                      <Route path="detail" element={<StudentDetail />} />
                      <Route path="tasks" element={<StudentDetailTasks />} />
                      <Route
                        path="portfolio"
                        element={<StudentDetailPortfolio />}
                      />
                    </Route>
                  </Route>
                </Route>
                <Route path="*" element={<LayoutNotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </Theme>
      {createPortal(<ToastContainer />, document.body)} */}
      </BrowserRouter>
    </Theme>
  )
}) as EventListener)
