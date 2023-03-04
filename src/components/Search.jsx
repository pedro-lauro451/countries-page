import React from 'react'
import '../css/style.css'

import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

import Select from 'react-select'

const Search = () => {
  const {
    handleOnChange,
    theme,
    selectedValue,
    handleDropdownInput,
    options
  } = useContext(GlobalContext);

  const customStyles = {
    option: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: theme == "dark" ? "#005892" : "#cca752",
      color: "white"
    }),

    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: theme == "dark" ? "#005892" : "#cca752",
    }),
    
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: theme == "dark" ? "#005892" : "#cca752",
      borderColor: theme == "dark" ? "#005892" : "#cca752",
    }),

    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: "white"
    }),

    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: "white"
    })
  }

  return (
    <div className="search">
      <input onChange={handleOnChange} className="search__search-bar" style={{backgroundColor: theme == "dark" ? "#005892" 
      : "#cca752"}} 
      placeholder="Search by name..."></input>
      <Select 
      className='search__dropdown' 
      options={options} 
      onChange={handleDropdownInput} 
      value={selectedValue}
      styles={customStyles}
      />
    </div>
  )
}

export default Search