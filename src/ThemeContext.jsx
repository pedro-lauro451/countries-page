import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: '',
    toggleThemeIcon: () => {},
});

const ThemeState = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const toggleThemeIcon = () => {
        if(theme == "dark") {
            setTheme("light");
        }
        if(theme == "light") {
            setTheme("dark");
        }
    };

    const contextValue = {
        theme,
        toggleThemeIcon,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;