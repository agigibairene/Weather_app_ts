import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search(){

    const [cityName, setCityName] = useState<string>("");

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
        setCityName(e.target.value)
    }

    return(
        <div id="search" className="flex gap-4 items-center px-2 py-2 rounded-3xl">
            <IoSearch className="text-2xl"/>
            <input 
                type="text" 
                placeholder="search city"
                className="grow bg-transparent border-0 outline-0"
                onChange={handleSearch}
                value={cityName}
            />
        </div>
    )
}