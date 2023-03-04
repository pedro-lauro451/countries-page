import { createContext, useState } from "react";

export const GlobalContext = createContext({
    fetchCountries: async () => {},
    search: '',
    handleOnChange: () => {},
    theme: '',
    toggleThemeIcon: () => {},
    selectedValue: {},
    handleDropdownInput: () => {},
    options: []
});

const GlobalState = ({children}) => {

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        return res.json();
    }

    const options = [
        {value: "", label: "All"},
        {value: "Africa", label: "Africa"},
        {value: "Americas", label: "Americas"},
        {value: "Asia", label: "Asia"},
        {value: "Europe", label: "Europe"},
        {value: "Oceania", label: "Oceania"}
      ];

    const [selectedValue, setSelectedValue] = useState(options[0]);

    const [search, setSearch] = useState('');

    const [theme, setTheme] = useState('dark');

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    };

    const handleDropdownInput = value => {
        setSelectedValue(value);
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
        toggleThemeIcon,
        selectedValue,
        handleDropdownInput,
        options
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;