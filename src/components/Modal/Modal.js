import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ modal, setModal }) => {

  if (modal) {

    function timeConverter(date) {
      date = new Date("2023-02-21T05:00:37-05:00")
      let newDate = new Date(date)
      return newDate.toString().slice(0, 15)
    }

    return (
      <div className='modal-container'>
        <div className='modal'>
          <span className='close-button-container'>
            <button className='close-modal' onClick={setModal}>X</button>
          </span>
          <h1 className='modal-header'>{modal.title}</h1>
          <div>
            <p><b>By:</b>: {modal.byline}</p>
            <p><b>Published</b>: {timeConverter(modal.published_date)}</p>
          </div>
          <div className='modal-synopsis'>
            <p>{modal.abstract}</p>
          </div>
          <a href={modal.url} target='_blank' rel='noreferrer'>See More</a>
          <div className='modal-details'>
            <img className='modal-cover' alt="Cover" src={modal.multimedia[0].url} />
          </div>

        </div>
      </div>
    )
  } else {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <span className='close-button-container'>
            <button className='close-modal' onClick={setModal}>X</button>
            <h1 className='no-books-warngin'>Something went wrong...</h1>
          </span>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {}

export default Modal