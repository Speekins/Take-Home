import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getArticlesByGenre } from '../../apiCalls'
import Searchbar from '../Searchbar/Searchbar'
import Main from '../Main/Main'
import './App.css'

const initialState = {
  articles: null,
  filteredArticles: null,
  modalOpen: false,
  loading: true,
  error: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "success": return { ...state, articles: action.payload, filteredArticles: null, loading: false }
    case "search": return { ...state, filteredArticles: action.payload }
    case "loading": return { ...state, loading: true }
    default: return { ...state }
  }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getArticlesByGenre('home')
      .then(response => dispatch({ type: "success", payload: response.results }))
  }, [])

  const getArticles = (genre) => {
    dispatch({ type: "loading" })
    getArticlesByGenre(genre)
      .then(response => dispatch({ type: "success", payload: response.results }))
  }

  const filterCurrentArticlesByTitle = (term) => {
    const newSet = state.articles.filter(article => article.title.toLowerCase().includes(term.toLowerCase()))
    dispatch({ type: "search", payload: newSet })
  }

  return (
    <main>
      <div className='welcome-header'>
        <h1>NEWSR</h1>
      </div>
      <Searchbar getArticles={getArticles} filterCurrentArticlesByTitle={filterCurrentArticlesByTitle}/>
      <Main
        articles={state.articles}
        filteredArticles={state.filteredArticles}
        loading={state.loading}
      />
    </main>
  )
}


export default App