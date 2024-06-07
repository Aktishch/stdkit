import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const TextComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLParagraphElement>,
  ref: React.ForwardedRef<HTMLParagraphElement>
): React.JSX.Element => {
  const classNames: string = twMerge(
    'font-normal',
    'leading-5',
    'text-center',
    'text-sm',
    'sm:text-base',
    'opacity-60',
    'mb-7',
    'md:mb-10',
    className
  )

  return (
    <p className={classNames} ref={ref}>
      {children}
    </p>
  )
}

export const Text = forwardRef(
  TextComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLParagraphElement> &
    React.RefAttributes<HTMLParagraphElement>
>
