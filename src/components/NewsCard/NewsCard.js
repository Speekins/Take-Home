import React from 'react'
import PropTypes from 'prop-types'
import './NewsCard.css'

export const NewsCard = ({ article }) => {
  return (
      <div className='single-news-card'>
        <p className='new-card-title'>{article.title}</p>
        <img src={article.multimedia[0].url} alt={`${article.title}`} className='news-card-img' />
      </div>
  )
}

NewsCard.propTypes = {}