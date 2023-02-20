import { createContext } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {}
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const contextValue = {
        fetchCountries
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;