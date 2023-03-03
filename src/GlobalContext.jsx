import { createContext, useState } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {},
    search: '',
    handleOnChange: () => {},
    theme: '',
    toggleThemeIcon: () => {}
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const [search, setSearch] = useState('');

    const [theme, setTheme] = useState('dark');

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    };

    const toggleThemeIcon = () => {
        if(theme == "dark") {
            setTheme("light");
        }
        if(theme == "light") {
            setTheme("dark");
        }
    };

    const contextValue = {
        fetchCountries,
        search,
        handleOnChange,
        theme,
        toggleThemeIcon
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;