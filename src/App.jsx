import CountriesList from './components/CountriesList'
import HeaderComponent from './components/HeaderComponent'
import Search from './components/Search'
import './css/style.css'

import { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

function App() {

  const {
    theme
  } = useContext(GlobalContext);

  return (
      <div className="app" style={{backgroundColor: theme == "dark" ? "#060624" : "#D3D3D3"}}>
        <HeaderComponent />
        <Search />
        <CountriesList />
      </div>
  )
}

export default App
