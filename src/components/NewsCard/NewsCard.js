import React from 'react'
import noImage from '../../assets/No_Image_Available.jpg'
import './NewsCard.css'

export const NewsCard = ({ article, setModal }) => {

  return (
    <div className='single-news-card' onClick={() => setModal(article.created_date)} tabIndex='0'>
      <p className='new-card-title'>{article.title ? article.title : "No Title Available"}</p>
      {article.multimedia ? <img src={article.multimedia[0].url} alt={`${article.title}`} className='news-card-img' /> : <img src={noImage} alt='nothing to see' className='news-card-img' />}
    </div>
  )
}