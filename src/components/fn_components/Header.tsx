import { NavLink } from "react-router-dom";
import darkThemeLogo from "../../assets/logo.png";
import lightThemeLogo from "../../assets/logo2.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { CiSun } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";


export default function Header(){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <header className="sticky top-0 w-full border-b bg-background/95 backdrp-blur py-2  supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <NavLink to="/">
                    <img src={theme === "dark" ? darkThemeLogo : lightThemeLogo } className="h-14"/>
                </NavLink>

                <div>
                    <div>
                        {theme === "light" ? <CiSun onClick={()=>toggleTheme()} className="h-6 w-6 text-yellow-500 rotate-0 transition-all" /> : <IoIosMoon onClick={()=>toggleTheme()} className="h-6 w-6 text-yellow-blue rotate-0 transition-all"/>}
                    </div>
                </div>
            </div>
        </header>
    )
}