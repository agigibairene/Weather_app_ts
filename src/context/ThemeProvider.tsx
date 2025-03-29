import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps{
    children: ReactNode
}

interface ThemeContextProps{
    theme: string,
    toggleTheme: ()=>void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    toggleTheme: ()=>{}
});

export default function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");

    function toggleTheme() {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            document.body.setAttribute("data-theme", newTheme);
            return newTheme;
        });
    }


    useEffect(()=>{
        document.body.setAttribute("data-theme", theme);
    }, [theme])

    const themeValues = {
        theme, 
        toggleTheme
    }

    return <ThemeContext.Provider value={themeValues}>
        {children}
    </ThemeContext.Provider>
}