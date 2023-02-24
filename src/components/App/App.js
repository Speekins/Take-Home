import React, { useReducer, useEffect, useCallback } from 'react'
import { getArticlesByGenre } from '../../apiCalls'
import Searchbar from '../Searchbar/Searchbar'
import Main from '../Main/Main'
import Modal from '../Modal/Modal'
import './App.css'
import { useLinkClickHandler } from 'react-router-dom'

const initialState = {
  articles: null,
  filteredArticles: null,
  modal: null,
  loading: true,
  error: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "success": return { ...state, articles: action.payload, filteredArticles: null, loading: false }
    case "search": {
      if (!action.payload) return { ...state, filteredArticles: null }
      return { ...state, filteredArticles: action.payload }
    }
    case "modal": return { ...state, modal: !state.modal ? action.payload : null }
    case "loading": return { ...state, loading: true }
    default: return { ...state }
  }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getArticlesByGenre('home')
      .then(response => {
        dispatch({ type: "success", payload: response.results })
      })
  }, [])

  const getArticles = useCallback((genre) => {
    dispatch({ type: "loading" })
    getArticlesByGenre(genre)
      .then(response => dispatch({ type: "success", payload: response.results }))
  }, [])

  const filterCurrentArticlesByTitle = useCallback((term) => {
    if (!term) {
      dispatch({ type: "search" })
    } else {
      const newSet = state.articles.filter(article => article.title.toLowerCase().includes(term.toLowerCase()))
      dispatch({ type: "search", payload: newSet })
    }
  }, [state.articles])

  const setModal = (createdDate) => {
    let modalArticle = state.articles.find(article => article.created_date === createdDate)
    dispatch({ type: "modal", payload: modalArticle })
  }

  return (
    <>
      <div className='welcome-header'>
        <h1 className='app-name'>NOOZ</h1>
        <div className='header-photo'></div>
      </div>
      {state.modal && <Modal modal={state.modal} setModal={setModal} />}
      <Searchbar getArticles={getArticles} filterCurrentArticlesByTitle={filterCurrentArticlesByTitle} />
      <Main
        articles={state.articles}
        filteredArticles={state.filteredArticles}
        setModal={setModal}
        loading={state.loading}
      />
    </>
  )
}


export default App