import React from 'react'
import PropTypes from 'prop-types'
import { timeConverter, cleanAuthorInfo } from '../../utils'
import './Modal.css'

const Modal = ({ modal, setModal }) => {

  if (modal) {

    return (
      <div className='modal-container'>
        <div className='modal'>
          <span className='close-button-container'>
            <button className='close-modal' onClick={setModal}>X</button>
          </span>
          <h1 className='modal-header'>{modal.title}</h1>
          <div>
            <p><b>By</b>: {cleanAuthorInfo(modal.byline)}</p>
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
            <h1 className='warning'>Something went wrong...</h1>
          </span>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  modal: PropTypes.object,
  setModal: PropTypes.func
}

export default Modal