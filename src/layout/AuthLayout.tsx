import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Icon } from '@components'
import { Loaded } from '@layout'

export const AuthLayout = () => {
  return (
    <Suspense fallback={<Loaded />}>
      <section className="container flex items-center justify-center min-h-screen bg-gradient-to-b from-white dark:from-dark to-primary/50 dark:to-primary">
        <div className="w-full sm:max-w-md card dark:bg-dark">
          <div className="px-4 pb-10 sm:px-8 pt-14 lg:pt-20 card-content">
            <Icon className="w-56 h-16 mx-auto mb-12" id="logo" />
            <Outlet />
          </div>
        </div>
      </section>
    </Suspense>
  )
}
