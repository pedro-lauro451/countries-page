import React from 'react'
import '../css/search.css'

import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Search = () => {
  const {
    handleOnChange
  } = useContext(GlobalContext);

  return (
    <div className="searchContainer">
      <input onChange={handleOnChange} className="search" placeholder="Search by name..."></input>
    </div>
  )
}

export default Search