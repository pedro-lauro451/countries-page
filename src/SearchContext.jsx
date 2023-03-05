import { createContext, useState } from "react";

export const SearchContext = createContext({
    search: '',
    handleOnChange: () => {},
    selectedValue: {},
    handleDropdownInput: () => {},
    options: [],
});

const SearchState = ({children}) => {

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

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    };

    const handleDropdownInput = value => {
        setSelectedValue(value);
    };

    const contextValue = {
        search,
        handleOnChange,
        selectedValue,
        handleDropdownInput,
        options
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchState;