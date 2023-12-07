import React from 'react'
import { articles } from '../data/articles'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { ArticleCard } from '../components/ArticleCard'

export const Articles = (): React.JSX.Element => {
  return (
    <section className="container container-xs container-distance flex flex-col items-center justify-center bg-grey dark:bg-dark">
      <Title className="mb-3">Cards</Title>
      <Subtitle className="mb-5 md:mb-10">Construction and effect</Subtitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 w-full mb-5 md:md-10">
        {articles.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 w-full"></div>
    </section>
  )
}
