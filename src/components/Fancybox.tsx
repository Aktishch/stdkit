import React, { useRef, useEffect, forwardRef } from 'react'
import classnames from 'classnames'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'

declare global {
  interface Window {
    NativeFancybox: typeof NativeFancybox
  }
}

interface FancyboxProps extends React.DOMAttributes<HTMLDivElement> {
  delegate?: string | undefined
  options?: {} | undefined
  className?: string
}

window.NativeFancybox = NativeFancybox
window.NativeFancybox.defaults.mainClass = 'fancybox-custom'
window.NativeFancybox.defaults.trapFocus = false
window.NativeFancybox.defaults.autoFocus = false
window.NativeFancybox.defaults.placeFocusBack = false

const FancyboxComponent = ({
  delegate = '[data-fancybox]',
  options = {},
  className,
  children,
}: FancyboxProps): React.JSX.Element => {
  const container = useRef<HTMLDivElement>(null)
  const classNames: string = classnames(className)

  useEffect((): (() => void) | undefined => {
    window.NativeFancybox.bind(container.current, delegate, options)

    return (): void => {
      window.NativeFancybox.unbind(container.current)
      window.NativeFancybox.close()
    }
  })

  return (
    <div className={classNames} ref={container}>
      {children}
    </div>
  )
}

export const Fancybox = forwardRef(FancyboxComponent) as React.ForwardRefExoticComponent<
  FancyboxProps & React.RefAttributes<unknown>
>

export const fancyboxOpen = (requestUrl: string): void => {
  window.NativeFancybox.show([{ src: requestUrl }], { dragToClose: false })
}

export const fancyboxNotClosing = (requestUrl: string): void => {
  window.NativeFancybox.show([{ src: requestUrl }], { dragToClose: false, closeButton: false, backdropClick: true })
}

export const fancyboxClose = (): void => window.NativeFancybox.close()
