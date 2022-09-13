import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';

export const OneDayTable = () => {
    
    const weatherLoad = useSelector(store => store.weather);
    // console.log(weatherLoad.value)
    const [ weather, setWeather ] = useState();

    useEffect(()=> {
        setWeather(weatherLoad.value);
    },[weatherLoad])

    return( weather ?
        <div>
            <table>
                <thead>
                    <tr>
                        {/* number of headers */}
                        <th>Date</th>
                        <th>City</th>
                        <th>Current Temp</th>
                        <th>Temp Min</th>
                        <th>Temp Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* number of content columns */}
                        <td>{new Date().toLocaleString('en-US', { timeZone: weather.timeZone }).split('.')[0]}</td>
                        <td>{weather.name}</td>
                        <td>{weather.main.temp}</td>
                        <td>{weather.main.temp_min}</td>
                        <td>{weather.main.temp_max}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    : <></>)
};