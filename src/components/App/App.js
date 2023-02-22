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
    case "success": return { ...state, articles: action.payload, loading: false }
    default: return { ...state }
  }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getArticlesByGenre('home')
      .then(response => dispatch({ type: "success", payload: response.results }))
  }, [])

  return (
    <>
      <div className='welcome-header'>
        <h1>This is the App!</h1>
      </div>
      <Searchbar />
      <Main
        articles={state.articles}
        filteredArticles={state.filteredArticles}
        loading={state.loading}
      />
    </>
  )
}


export default App