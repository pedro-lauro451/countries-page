import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { ThemeContext } from '../ThemeContext'
import { SearchContext } from '../SearchContext'
import { useQuery } from 'react-query'
import '../css/style.css'
import AnimateIn from './AnimateIn'
import { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import Country from './Country'

const ScrollIcon = BsFillArrowUpCircleFill;

const CountriesList = () => {
    const {
        fetchCountries,
        handleClickedCountry,
        selectedCountry,
        isCountryClicked,        
    } = useContext(GlobalContext);

    const {
        theme
    } = useContext(ThemeContext);

    const {
        search,
        selectedValue,
    } = useContext(SearchContext);

    const country = {
        name: selectedCountry.name.common,
        population: selectedCountry.population,
        region: selectedCountry.region,
        subregion: selectedCountry.subregion,
        capital: selectedCountry.capital,
        tld: selectedCountry.tld,
        flag: selectedCountry.flags.svg
    };

    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const { data, status } = useQuery('countries', fetchCountries);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error!</p>;
    }

    return (
        <div className='countries-list' style={{minHeight: "100vh"}}>
            
            <div>
                { isCountryClicked == 1 ?   
                    <Country 
                    name={country.name} 
                    population={country.population}
                    region={country.region}
                    subregion={country.subregion}
                    capital={country.capital}
                    topLevelDomain={country.tld}
                    flag={country.flag}/> 
                    : ''
                }
            </div>
            <div className='countries-list__list'>
            { isCountryClicked == 0 ?
                data.filter(input => (selectedValue.value != "" ? input.region == selectedValue.value 
                : input.region == "Africa" || input.region == "Americas" || input.region == "Asia"
                || input.region == "Europe" || input.region == "Oceania") 
                && input.name.common.toLowerCase().startsWith(search.toLowerCase())
                )
                .map(country => (
                    <AnimateIn key={country.name.common}>
                        <div className="countries-list__item" onClick={() => {handleClickedCountry(country)}}>
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
                )) : ''
            } 
            </div>
            {scrollTop && (<button className='countries-list__scroll-button' onClick={bottomToTop}>
                <ScrollIcon style={{color: theme == "dark" ? "#005892" : "#cca752"}} className='countries-list__scroll-button-icon' size={40}/>
            </button>)}
        </div>
    )
}

export default CountriesList