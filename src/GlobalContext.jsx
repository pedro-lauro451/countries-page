import { createContext, useState } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {},
    search: '',
    handleOnChange: () => {}
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const [search, setSearch] = useState('');

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    };

    const contextValue = {
        fetchCountries,
        search,
        handleOnChange
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;