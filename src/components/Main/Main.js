import React from 'react'
import PropTypes from 'prop-types'
import { NewsCard } from '../NewsCard/NewsCard'
import './Main.css'

const Main = ({ articles, loading }) => {

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  const cleanData = articles.filter(article => !!article.abstract)
  const formattedArticles = cleanData.map((article, idx) => <NewsCard article={article} key={idx}/>)

  return (
    <div className='article-container'>
      {formattedArticles}
    </div>
  )
}

Main.propTypes = {}

export default Main