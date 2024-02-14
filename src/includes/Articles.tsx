import React from 'react'
import { articles } from '../data/articles'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { ArticleCard } from '../components/ArticleCard'
import { ArticleInvertedCard } from '../components/ArticleInvertedCard'
import { Movement } from '../components/Movement'

export const Articles = (): React.JSX.Element => {
  return (
    <section
      className="container flex flex-col items-center justify-center container-xs container-distance bg-grey dark:bg-dark"
      id="block"
    >
      <Movement variant="blend" className="mb-3">
        <Title>Cards</Title>
      </Movement>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Construction and effect</Subtitle>
      </Movement>
      <div className="grid w-full gap-5 mb-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 md:md-10">
        {articles.map((item, index) => (
          <ArticleCard item={item} key={index} />
        ))}
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {articles.map((item, index) => (
          <ArticleInvertedCard item={item} key={index} />
        ))}
      </div>
    </section>
  )
}
