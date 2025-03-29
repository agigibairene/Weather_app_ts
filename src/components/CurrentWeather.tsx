import { useEffect, useState } from "react";

export default function CurrentWeather(){
    const [weatherData, setWeatherData] = useState("")

    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=37.81021&lon=-122.42282&timezone=auto&language=en&units=auto';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_weather_apiKey,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    const fetchWeatherData = async () =>{
        const response =  await fetch(url, options)
        const data = await response.json()

        setWeatherData(data)
    }

    useEffect(()=>{
        fetchWeatherData()
    }, [])

    console.log(weatherData)

    return(
        <div>
            <h1>I am the  CurrentWeather</h1>
        </div>
    )
}