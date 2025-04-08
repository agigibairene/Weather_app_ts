import { useEffect, useState } from "react";

export default function DailyCast(){
    const [hourlycast, setHourCast] = useState([]);

    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=37.81021&lon=-122.42282&language=en&units=auto';
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
            setHourCast(data.daily.data);
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchHourWeather()
    }, [])

    console.log(hourlycast)

    return(
        <div className="w-4/5 mx-auto hour-cast flex flex-col gap-4 mb-8">
            <h1 className="hour-title font-bold uppercase text-xl">Daily forecast</h1>
            <div className="flex overflow-x-auto no-scrollbar gap-4">
                {
                    hourlycast.map(hour=>{
                        const {day, icon, temperature,precipitation, wind} = hour;
                        const dateObj = new Date(day);
                        const formatter = new Intl.DateTimeFormat('en-US', {
                            weekday: "short",
                            day: '2-digit',
                            month: '2-digit',
                        })
                        return <div key={wind}>
                            <p className="text-center days">{formatter.format(dateObj)}</p>
                            <div className="flex rounded-lg items-center min-w-32 border p-4 hour-card flex-col">
                                <img src={`/set01/small/${icon}.png`} alt="" />
                                <p>{temperature}</p>
                                <p>{precipitation["total"]} mm/h</p>
                                <p className="flex items-center">{wind["speed"]} mph <i className="ml-1 bi bi-send-arrow-down"></i></p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}