import React from 'react'
import { NewsCard } from '../NewsCard/NewsCard'
import './Main.css'

const Main = ({ articles, filteredArticles, loading, setModal }) => {

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (!!filteredArticles) {
    const cleanData = filteredArticles.filter(article => !!article.title)
    const formattedArticles = cleanData.map((article, idx) =>
      <NewsCard
        article={article}
        key={idx}
        setModal={setModal}
      />)

    return (
      <div className='article-container'>
        {formattedArticles}
      </div>
    )
  }

  const cleanData = articles.filter(article => !!article.title)
  const formattedArticles = cleanData.map((article, idx) =>
    <NewsCard
      article={article}
      key={idx}
      setModal={setModal}
    />)

  return (
    <div className='article-container'>
      {formattedArticles}
    </div>
  )
}

export default Main