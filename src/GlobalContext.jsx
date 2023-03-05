import { createContext, useState } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {},
    handleClickedCountry: () => {},
    selectedCountry: {}
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const [selectedCountry, setSelectedCountry] = useState({
        name: {
            common: ''
        }
    });

    const handleClickedCountry = value => {
        setSelectedCountry(value);
    };

    const contextValue = {
        fetchCountries,
        handleClickedCountry,
        selectedCountry
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;