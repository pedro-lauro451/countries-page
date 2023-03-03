import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { useQuery } from 'react-query'
import '../css/style.css'
import AnimateIn from './AnimateIn'

const CountriesList = () => {
    const {
        fetchCountries,
        search,
        theme
    } = useContext(GlobalContext);

    const { data, status } = useQuery('countries', fetchCountries);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error!</p>;
    }

    return (
        <div className='countries-list' style={{minHeight: "100vh"}}>
            {
                data.filter(input => input.name.common.toLowerCase().startsWith(search.toLowerCase())).map(country => (
                    <AnimateIn key={country.name.common}>
                        <div className="countries-list__item">
                            <img className="countries-list__flag" src={country.flags.svg}
                            style={{backgroundColor: theme == "dark" ? "#0d0d40" : "#F9F7F5"}}></img>
                            <div className="countries-list__card" style={{backgroundColor: theme == "dark" ? "#0d0d40" : "#F9F7F5"}}>
                                <h4 className="countries-list__title"
                                style={{color: theme == "dark" ? "#ffffff" : "#000000"}}>{country.name.common.split(",")[0]}</h4>
                                <ul className="countries-list__unordered-list">
                                    <li className="countries-list__ordered-list"
                                    style={{color: theme == "dark" ? "#ffffff" : "#000000"}}><b>Population:</b> {parseFloat(country.population).toLocaleString('en')}</li>
                                    <li className="countries-list__ordered-list"
                                    style={{color: theme == "dark" ? "#ffffff" : "#000000"}}><b>Region:</b> {country.region}</li>
                                </ul>
                            </div>
                        </div>
                    </AnimateIn>
                )) 
            } 
        </div>
    )
}

export default CountriesList