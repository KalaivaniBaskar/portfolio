import { createContext, useContext, useState } from "react";

const themeContext = createContext({}); 

export const ThemeCTXProvider = ({children}) => {
    const [theme, setTheme] = useState('light'); 
    const [coltheme, setColTheme] = useState(''); 
    const [colSwitch, setColSwitch] = useState('violet'); 
    const [isDraw, setIsDraw] = useState(false)
    return (
        <themeContext.Provider value={{theme, setTheme, isDraw, 
        setIsDraw, coltheme, setColTheme, colSwitch, setColSwitch}}>
            {children}
        </themeContext.Provider>
    )
}

export const useThemeCTX = () => {
    return useContext(themeContext);
} 

export default themeContext;