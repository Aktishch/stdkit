import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Pack } from './Pack'
import { Loader } from './Loader'
import { Picture } from './Picture'
import { Button } from './Button'
import { Movement } from './Movement'
import { Waved } from './Waved'

interface ArticleCardProps {
  item: { id: number; images: string[]; title: string; text: string }
  className?: string
}

const ArticleCardComponent = (
  { item, className }: ArticleCardProps,
  ref: React.ForwardedRef<HTMLElement>
): React.JSX.Element => {
  const classNames: string = classnames('card', 'dark:bg-black', 'h-full', className)

  return (
    <article className={classNames} ref={ref}>
      <Movement>
        <Pack size="md" className="bg-grey dark:bg-dark">
          <Loader />
          <Picture webp={item.images[0]} src={item.images[1]} className="image image-rise" loading="lazy" />
        </Pack>
      </Movement>
      <div className="px-3 py-5 card-content md:px-5">
        <h4 className="mb-4 font-semibold font-alt text-24">{item.title}</h4>
        <p className="mb-5 leading-5 text-justify text-14 md:text-16">{item.text}</p>
        <Button color="primary" variant="fill" className="mt-auto">
          <Waved />
          Button
        </Button>
      </div>
    </article>
  )
}

export const ArticleCard = forwardRef(ArticleCardComponent) as React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLElement>
>
