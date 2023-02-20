import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { useQuery } from 'react-query'

const CountriesList = () => {
    const {
        fetchCountries
    } = useContext(GlobalContext);

    const { data, status } = useQuery('countries', fetchCountries);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p>Error!</p>;
    }

    return (
        <div>
            {data.length > 0 ? <div>{data[1].name.common}</div> : ''}
        </div>
    )
}

export default CountriesList