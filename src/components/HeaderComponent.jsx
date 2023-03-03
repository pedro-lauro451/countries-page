import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import '../css/style.css'
import { BsFillSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"

const HeaderComponent = () => {
  const LightIcon = BsFillSunFill;
  const DarkIcon = BsMoonFill;

  const {
    theme,
    toggleThemeIcon
  } = useContext(GlobalContext);

  return (
    <div className="header-component" style={{backgroundColor: theme == "dark" ? "#0d0d40" : "#f0f0f0"}}>
      <h3 className="header-component__title" style={{color: theme == "dark" ? "#ffffff" : "#cca752"}}>Countries Info</h3>
      <div className='header-component__icons'>
        {theme == "dark" ? <LightIcon style={{color: "#FFBF00"}} className='header-component__icons__theme-icon' size={30} onClick={toggleThemeIcon}/> 
        : <DarkIcon style={{color: "#005892"}} className='header-component__icons__theme-icon' size={30} onClick={toggleThemeIcon}/>}
      </div>
    </div>
  )
}

export default HeaderComponent