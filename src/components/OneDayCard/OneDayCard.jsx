import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import windDirection from '../../utils/windDirection';
import {ForecastCard} from '../ForecastCard/ForecastCard';

export const OneDayCard = () => {

    const weatherLoad = useSelector(store => store.weather);
    const forecastLoad = useSelector(store => store.forecast);
    // console.log(weatherLoad.value)
    // console.log(forecastLoad)
    const [ weather, setWeather ] = useState();
    const [ forecast, setForecast ] = useState();
    
    useEffect(()=> {
        setWeather(weatherLoad.value);
        setForecast(forecastLoad.value);
    },[weatherLoad , forecastLoad])

    return (
        weather ?
            <div className="col-8">
            <h2 id="dash-title">{weather.name}</h2>
            <div className="row">
                <div id="current" className="col-6">
                    <h3>{new Date().toLocaleString('en-US', { timeZone: weather.timeZone }).split('.')[0]}</h3>
                    <ul className="list-group-item">
                        <li id="temp" className="list-group-item">Temp: {weather.main.temp}°F and {weather.weather[0].description}</li>
                        <li id="wind" className="list-group-item">Wind: {weather.wind.speed} knots? from the {windDirection(weather.wind.deg)}</li>
                        <li id="humid" className="list-group-item">Humidity: {weather.main.humidity}%</li>
                        {forecast ? 
                            <li id="uvi" className={`list-group-item uv-${Math.floor(forecast.current.uvi)}`}>UV Index: {forecast.current.uvi}</li>
                            :
                            <></>
                        }
                    </ul>
                </div>
                <div id="image" className="col-6">
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt='cloud icon'></img>
                </div>
            </div>
            {forecast ?
                <div id="future" className="d-flex flex-row justify-space-around">
                    {forecast.daily.map( fc => (
                        <ForecastCard
                            date = {new Date(fc.dt).toLocaleString('en-US', { timeZone: weather.timeZone }).split('.')[0]}
                            uvi = {"UV Index: "+fc.uvi}
                            uvf = {Math.floor(fc.uvi)}
                            temp = {"Low: "+ fc.temp.min+"°F, High: "+fc.temp.max+"°F"}
                            wind = {"Wind: "+fc.wind_speed+" "+windDirection(fc.wind_deg)}
                            humidity = {"Humidity: "+fc.humidity+"%"}
                            image = {`http://openweathermap.org/img/wn/${fc.weather[0].icon}@4x.png`}
                        />
                    ))}  
                </div>
                :
                <></>
            }
        </div>
        :
        <>
        </>
    )
};