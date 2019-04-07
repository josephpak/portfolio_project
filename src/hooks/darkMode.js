import React from "react"

const defaultContextData = {
    dark: false,
    toggle: () => {}
}

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext)

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeLoaded: false
    });

    React.useEffect(() => {
        const lsDark = localStorage.getItem("dark") === "true";
        setThemeState({
            ...themeState,
            dark: lsDark,
            hasThemeLoaded: true,
        })
    }, []);

    return [themeState, setThemeState]
}

export { 
    defaultContextData,
    ThemeContext,
    useTheme,
    useEffectDarkMode,   
}