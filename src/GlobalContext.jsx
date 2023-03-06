import { createContext, useState } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {},
    handleClickedCountry: () => {},
    selectedCountry: {},
    isCountryClicked: '',
    handleClose: () => {}
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const [selectedCountry, setSelectedCountry] = useState({
        name: {
            common: '',
        },
        population: 0,
        region: '',
        subregion: '',
        capital: [''],
        tld: [''],
        flags: {
            svg: ''
        }
    });

    const [isCountryClicked, setIsCountryClicked] = useState(0);

    const handleClose = () => {
        setIsCountryClicked(0);
    };

    const handleClickedCountry = value => {
        setSelectedCountry(value);
        setIsCountryClicked(1);
    };

    const contextValue = {
        fetchCountries,
        handleClickedCountry,
        selectedCountry,
        isCountryClicked,
        handleClose
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;