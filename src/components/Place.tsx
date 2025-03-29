import { IoLocationSharp } from "react-icons/io5";

export default function Place(){
    return(
        <div>
            <div className="flex gap-2 items-center">
                <IoLocationSharp className="text-2xl"/>
                <p><span className="font-bold">London</span>, United Kingdom</p>
            </div>
        </div>
    )
}