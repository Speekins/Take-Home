import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Searchbar.css'



const Searchbar = ({ getArticles, filterCurrentArticlesByTitle }) => {

  const [filterValue, setFilterValue] = useState('home')

  useEffect(() => {
    getArticles(filterValue)
  }, [filterValue])

  const handleChange = (e) => {
    setFilterValue(e.target.value)
  }

  const handleSearch = (e) => {
    filterCurrentArticlesByTitle(e.target.value)
  }

  const selections =
    <select name="filter" id="filter" value={filterValue} onChange={(event) => handleChange(event)}>
      <option value="arts">Arts</option>
      <option value="automobiles">Automobiles</option>
      <option value="books">Books</option>
      <option value="business">Business</option>
      <option value="fashion">Fashion</option>
      <option value="food">Food</option>
      <option value="health">Health</option>
      <option value="home">Home</option>
      <option value="insider">Insider</option>
      <option value="magazine">Magazine</option>
      <option value="movies">Movies</option>
      <option value="opinion">Opinion</option>
      <option value="politics">Politics</option>
      <option value="realestate">Real Estate</option>
      <option value="realestate">Real Estate</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
      <option value="technology">Technology</option>
      <option value="theater">Theatre</option>
      <option value="travel">Travel</option>
      <option value="us">US</option>
      <option value="world">World</option>
    </select>

  return (
    <div className='searchbar-container'>
      <div className='searchbar-left'>
        {selections}
      </div>
      <div className='searchbar-right'>
        <label htmlFor='search'>Filter Results</label>
        <input className='search' name='search' onChange={(event) => handleSearch(event)}></input>
      </div>
    </div>
  )
}

Searchbar.propTypes = {}

export default Searchbar

/*
arts, 
automobiles, 
books, 
business, 
fashion,
food, 
health, 
home, 
insider, 
magazine, 
movies, 
nyregion, 
obituaries, 
opinion, 
politics, 
realestate, 
science, 
sports, 
sundayreview, 
technology, 
theater, 
t-magazine, 
travel, 
upshot,
us, 
world
*/