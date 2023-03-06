import React from 'react'
import '../css/style.css'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import { GlobalContext } from '../GlobalContext'

const Country = (props) => {

  const {
    handleClose
    
} = useContext(GlobalContext);

  const {
    theme
  } = useContext(ThemeContext);
  
  return (
    <>
      <div className='country'>
        <div>
          <img className='country__flag' src={props.flag} alt="" />
          <div style={{color: theme == "dark" ? "#ffffff" : "#000000"}}>
          <h2>{props.name}</h2>
         
            <h4 className='country__information__item'>Population: {parseFloat(props.population).toLocaleString('en')}</h4>
      
            <h4 className='country__information__item'>Region: {props.region}</h4>
        
            <h4 className='country__information__item'>Subregion: {props.subregion}</h4>
          
            <h4 className='country__information__item'>Capital: {props.capital}</h4>
        
            <h4 className='country__information__item'>Top Level Domain: {props.topLevelDomain}</h4>

            <button className='country__information__button' onClick={handleClose}
            style={{backgroundColor: theme == "dark" ? "#005892" : "#cca752"}}>Back</button>
         
        </div>

        </div>
      </div>

      
    </>
  )
}

export default Country