import React from 'react'
import PropTypes from 'prop-types'
import noImage from '../../assets/No_Image_Available.jpg'
import './NewsCard.css'

export const NewsCard = ({ article }) => {

  return (
    <div className='single-news-card'>
      <p className='new-card-title'>{article.title ? article.title : "No Title Available"}</p>
      {article.multimedia ? <img src={article.multimedia[0].url} alt={`${article.title}`} className='news-card-img' /> : <img src={noImage} alt='nothing to see' className='news-card-img' />}
    </div>
  )
}

NewsCard.propTypes = {}