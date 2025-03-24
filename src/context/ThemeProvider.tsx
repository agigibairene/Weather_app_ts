import { createContext, ReactNode, useEffect, useState } from "react";


interface ThemeProps{
    children: ReactNode
}

interface ThemeContextProps{
    theme: string,
    toggleTheme: ()=>void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "",
    toggleTheme: ()=>{}
});

export default function ThemeProvider({children} : ThemeProps){
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");

    function toggleTheme(){
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme)
    }, [theme]);

    const themeValues = {
        theme, 
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={themeValues}>
            {children}
        </ThemeContext.Provider>
    )
}