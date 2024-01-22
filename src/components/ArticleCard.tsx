import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Pack } from '../components/Pack'
import { Loader } from '../components/Loader'
import { Picture } from '../components/Picture'
import { Button } from '../components/Button'
import { Movement } from '../components/Movement'
import { Waved } from '../components/Waved'

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
      <div className="card-content py-5 px-3 md:px-5">
        <h4 className="font-alt font-semibold text-24 mb-4">{item.title}</h4>
        <p className="text-justify text-14 md:text-16 leading-5 mb-5">{item.text}</p>
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
