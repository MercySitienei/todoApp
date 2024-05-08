import { createContext, useState } from "react";


export const ThemeContext = createContext({
    darkTheme: false,
    setDarkTheme: ()=>null,
    handleTheme:()=>null
});

export const ThemeProvider = ({ children })=>{
    const [darkTheme, setDarkTheme] = useState(false)

    const handleTheme =()=>{
        setDarkTheme((prev)=> !prev)
    }

    const value = {darkTheme, handleTheme}


    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}