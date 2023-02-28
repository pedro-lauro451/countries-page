import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { useQuery } from 'react-query'
import '../css/countriesList.css'
import AnimateIn from './AnimateIn'

const CountriesList = () => {
    const {
        fetchCountries,
        search
    } = useContext(GlobalContext);

    const { data, status } = useQuery('countries', fetchCountries);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error!</p>;
    }

    return (
        <div className='container'>
            {
                data.filter(input => input.name.common.toLowerCase().startsWith(search.toLowerCase())).map(country => (
                    <AnimateIn key={country.name.common}>
                        <div className="item">
                            <img className="flag" src={country.flags.svg}></img>
                            <div className="card">
                                <h4>{country.name.common.split(",")[0]}</h4>
                                <ul>
                                    <li><b>Population:</b> {parseFloat(country.population).toLocaleString('en')}</li>
                                    <li><b>Region:</b> {country.region}</li>
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