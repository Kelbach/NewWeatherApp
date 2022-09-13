import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';

export const ForecastTable = () => {

    const forecastLoad = useSelector(store => store.forecast);
    // console.log(forecastLoad)
    const [ forecast, setForecast ] = useState();

    useEffect(()=> {
        setForecast(forecastLoad.value);
    },[forecastLoad])

    return ( forecast ?
        <table>
            <thead>
                <tr>
                    {/* number of headers */}
                    <th>Five Day Forecast</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* number of content columns */}
                    <td>{forecast.daily[0].temp.day}</td>
                    <td>{forecast.daily[1].temp.day}</td>
                    <td>{forecast.daily[2].temp.day}</td>
                    <td>{forecast.daily[3].temp.day}</td>
                    <td>{forecast.daily[4].temp.day}</td>
                    
                </tr>
            </tbody>
        </table>
    : <></>);
}