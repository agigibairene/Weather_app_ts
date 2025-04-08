import { useState } from "react";
import { CiSettings } from "react-icons/ci";

export default function Settings(){
    const [openSettings, setOpenSettings] = useState<boolean>(false);

    const btns = [
        {label: "auto"},
        {label: "metric"},
        {label: "uk"},
        {label: "us"},
        {label: "ca"}
    ]
    return(
        <div>
            <CiSettings className="text-2xl"/>
            <div className="w-[250px] settings">
                <p className="font-bold">Measurement Systems:</p>
                {
                    btns.map(btn=><button className="btns">{btn["label"]}</button>)
                }
            </div>
        </div>
    )
}