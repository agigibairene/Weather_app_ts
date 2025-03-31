// import { useEffect, useState } from "react";
import {weatherData } from "../assets/api";

export default function CurrentWeather(){
    // const [weatherInfo, setWeatherData] = useState(weatherData)

    // const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=37.81021&lon=-122.42282&timezone=auto&language=en&units=auto';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': import.meta.env.VITE_weather_apiKey,
    //         'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    //     }
    // };

    // const fetchWeatherData = async () =>{
    //     const response =  await fetch(url, options)
    //     const data = await response.json()

    //     setWeatherData(data)
    // }

    // useEffect(()=>{
    //     fetchWeatherData()
    // }, [])
    interface WeatherProps{
        icon?: string; 
        value:string,
        title: string
    }

    const weather: WeatherProps[] = [
        {
            icon: "bi bi-droplet mr-4",
            value: `${weatherData[0]["current"]["precipitation"]["total"].toString()} mmh`,
            title: "Precipation"
        },
        {
            icon: "bi bi-moisture mr-4",
            value: `${weatherData[0]["current"]["humidity"].toString()} %`,
            title: "Humidity"
        },
        {
            icon: "bi bi-clouds-fill mr-4",
            value: `${weatherData[0]["current"]["cloud_cover"].toString()} %`,
            title: "Clouds Cover"
        },
        {
            icon: "bi bi-wind mr-4",
            value: `${weatherData[0]["current"]["wind"]["speed"].toString()} %`,
            title: "Wind"
        },
        {
            icon: "bi bi-moisture mr-4",
            value: `${weatherData[0]["current"]["uv_index"].toString()}`,
            title: "UV index"
        },
        {
            icon: "bi bi-eye mr-4",
            value: `${weatherData[0]["current"]["uv_index"].toString()} mi`,
            title: "Visibility"
        },
    ]



    return(
        <div className="flex  gap-4 m-10">
            <div className="overcast px-9 py-8 rounded-lg w-3/12">
                <img src={`/public/set01/big/${weatherData[0]["current"]["icon_num"]}.png`} alt="" />
                <p className="temperature text-4xl font-bold">{weatherData[0]["current"]['temperature']} °C</p>
                <p className="feels-like my-4">feels like {weatherData[0]["current"]['feels_like']} °C</p>
                <p className="text-3xl">Overcast</p>
            </div>

            <div className="details rounded-lg p-10  px-16 grid grid-cols-2 gap-x-40 gap-y-10 max-w-max">
                {/* <div className="flex flex-col gap-10"> */}
                  {
                    weather.map((item : WeatherProps)=> {
                        const {title, icon, value} = item;
                        return <div>
                         <p>
                            <i className={icon}></i>
                                {value}
                            <span className="block text-center">{title}</span>
                        </p>
                        </div>
                    })
                  }
                {/* </div> */}

            </div>
        </div>
    )
}