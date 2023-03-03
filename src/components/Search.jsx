import React from 'react'
import '../css/style.css'

import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Search = () => {
  const {
    handleOnChange,
    theme
  } = useContext(GlobalContext);

  return (
    <div className="search">
      <input onChange={handleOnChange} className="search__search-bar" style={{backgroundColor: theme == "dark" ? "#005892" 
      : "#cca752"}} 
      placeholder="Search by name..."></input>
    </div>
  )
}

export default Search