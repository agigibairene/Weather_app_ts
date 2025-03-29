import { useContext } from "react";
import Place from "./Place";
import Search from "./Search";
import { ThemeContext } from "../context/ThemeProvider";
import { IoMoonSharp, IoSunnyOutline  } from "react-icons/io5";
import Settings from "./Settings";


export default function Header(){

    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme)

    return(
        <header className="header">
            <nav className="flex justify-between items-center px-16 py-8">
                <Place/>
                <Search />

                <div className="flex gap-9">
                    {theme === "dark" ? <IoSunnyOutline className="text-2xl" onClick={()=>toggleTheme()} /> : <IoMoonSharp className="text-2xl" onClick={()=>toggleTheme()} />}
                    <Settings />
                </div>
            </nav>
        </header>
    )
}