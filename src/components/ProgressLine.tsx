import React, { useState, useEffect } from 'react'
import { scrolledPage } from '../functions/scrolled-page'

export const ProgressLine = () => {
  const [progress, setProgress] = useState('')

  const createProgress = (): void => {
    const width = `${Math.floor(
      (scrolledPage().top / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100
    )}%`

    setProgress(width)
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('scroll', createProgress as EventListener)

    return () => document.removeEventListener('scroll', createProgress as EventListener)
  }, [])

  return (
    <div className="hidden lg:block fixed inset-0 z-4 bg-primary w-0 h-1 duration-2" style={{ width: progress }}></div>
  )
}
