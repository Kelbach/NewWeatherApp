import React, {useState} from 'react';
import api from '../../utils/api';
import {useDispatch} from 'react-redux';
import { changeWeather } from '../../reducers/weatherReducer';
import { changeForecast } from '../../reducers/forecastReducer';

export const SearchBar = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const dispatch = useDispatch();
    const [ errorMessage, setErrorMessage ] = useState('');

    async function fetchForecast(lat, lon) {
        const res = await api.getWeatherForecast(lat,lon,apiKey);
        console.log(res.data);
        dispatch(changeForecast(res.data));
    }

    async function fetchCurrentWeather(city) {
        const res = await api.getWeatherByCity(city,apiKey);
        console.log(res.data);
        dispatch(changeWeather(res.data));
        fetchForecast(res.data.coord.lat, res.data.coord.lon);
    }

    function submitFormHandler(e) {
        e.preventDefault();
        setErrorMessage('')
        if (!e.target[0].value) {
            
            setErrorMessage('Please Enter a City')

        } else {

            fetchCurrentWeather(e.target[0].value);

        }
    }

    // function changeHandler(e){
    //     setErrorMessage('')
    //     if (e.target.name === '') {
    //         setErrorMessage('Please Enter a City')
    //     }
    //     fetchCurrentWeather(e.target.value);
        
    // }

    return(
        <div className="row">
            <h2>Search for a City:</h2>
            <form onSubmit={submitFormHandler}>
                <input type="text" id="city-search" autoFocus={true} className="form-input" placeholder="Enter city here" />
                <button type="submit" className="btn" id="btn">Search</button>
            </form>
            {errorMessage && (
                <div className="alert alert-info text-center" role="alert">
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}