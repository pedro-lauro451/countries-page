import CountriesList from './components/CountriesList'
import HeaderComponent from './components/HeaderComponent'
import Search from './components/Search'
import './css/style.css'

import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import SearchState from './SearchContext'

function App() {

  const {
    theme
  } = useContext(ThemeContext);

  return (
      <div className="app" style={{backgroundColor: theme == "dark" ? "#060624" : "#D3D3D3"}}>
        <HeaderComponent />
        <SearchState>
          <Search />
          <CountriesList />
        </SearchState>
      </div>
  )
}

export default App
