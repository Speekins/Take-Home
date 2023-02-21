import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getArticlesByGenre } from '../../apiCalls';
import './App.css';

const App = () => {
  useEffect(() => {
    getArticlesByGenre('home')
    .then(response => console.log(response.results))
  }, [])
}


export default App