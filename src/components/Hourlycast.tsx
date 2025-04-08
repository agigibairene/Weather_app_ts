import { useEffect, useState } from "react";

export default function Hourlycast(){
    const [hourlycast, setHourCast] = useState([]);

    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/hourly?lat=37.81021&lon=-122.42282&timezone=auto&language=en&units=auto';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_weather_apiKey,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    const fetchHourWeather = async () =>{
        try{
            const response = await fetch(url, options);
            const data = await response.json()
            setHourCast(data.hourly.data.slice(0, 24));
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchHourWeather()
    }, [])


    return(
        <div className="w-4/5 mx-auto hour-cast flex flex-col gap-4 mb-8">
            <h1 className="hour-title font-bold uppercase text-xl">Hourly forecast</h1>
            <div className="flex overflow-x-auto no-scrollbar gap-4">
                {
                    hourlycast.map(hour=>{
                        const {date, icon, temperature,precipitation, wind} = hour;
                        const dateObj = new Date(date);
                        const time = new Intl.DateTimeFormat('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        }).format(dateObj);
                        return <div  key={date} className="flex rounded-lg items-center min-w-32 border p-4 hour-card flex-col">
                            <p>{time}</p>
                            <img src={`/set01/small/${icon}.png`} alt="" />
                            <p>{temperature}</p>
                            <p>{precipitation["total"]} mm/h</p>
                            <p className="flex items-center">{wind["speed"]} mph <i className="ml-1 bi bi-send-arrow-down"></i></p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}