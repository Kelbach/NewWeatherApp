import React, {useState} from 'react';
import api from '../../utils/api';
import { useDispatch } from 'react-redux';
import { changeWeather } from '../../reducers/weatherReducer';
import { changeForecast } from '../../reducers/forecastReducer';


export const SearchBar = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const dispatch = useDispatch();
    const citiesLoad = JSON.parse(localStorage.getItem('cities')) || [];
    // const citiesLoad = useSelector(store => store.cities.value);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ cities, setCities ] = useState(citiesLoad);

    async function fetchForecast(lat, lon) {
        const res = await api.getWeatherForecast(lat,lon,apiKey);
        console.log(res.data);
        dispatch(changeForecast(res.data));
    }

    async function fetchCurrentWeather(city) {
        try {
            const res = await api.getWeatherByCity(city,apiKey);
            console.log(res);

            if (res.status>=200 && res.status < 300){
                
                dispatch(changeWeather(res.data));
                fetchForecast(res.data.coord.lat, res.data.coord.lon);
                let newCities = [...cities];

                if ( !newCities.includes(city) ) {
                    newCities.push(city)
                    setCities(newCities);
                }

                localStorage.setItem('cities', JSON.stringify(newCities));

            } else {

                setErrorMessage("Something went wrong...");

            }
        } catch (err) {

            setErrorMessage("ERROR: City Not Found");

        }
    }
    
    function submitFormHandler(e) {
        let newCity = e.target[0].value;
        e.preventDefault();
        setErrorMessage('');

        if (!newCity) {
            
            setErrorMessage('Please Enter a City');

        } else {

            fetchCurrentWeather(newCity);
            document.getElementById('city-search').value = '';

        }
    }

    function clearCities() {
        localStorage.removeItem('cities');
        setCities([]);
    }
    // function changeHandler(e){
    //     setErrorMessage('')
    //     if (e.target.name === '') {
    //         setErrorMessage('Please Enter a City')
    //     }
    //     fetchCurrentWeather(e.target.value);
        
    // }

    return(
        <div className="col-4 flex-column text-center justify-space-between">
            <div className="row">
                <h2>Search for a City:</h2>
                <form onSubmit={submitFormHandler}>
                    <input type="text" id="city-search" autoFocus={true} className="form-input" placeholder="Enter city here" />
                    <button type="submit" className="btn" id="btn" >Search</button>
                </form>
                {errorMessage && (
                    <div className="alert alert-danger text-center" role="alert">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            {cities[0] ? <button className="" onClick={clearCities}>Clear Searched Cities</button>: <></>}
            <div className="row flex-column" id="searched">
                <ul>
                    {cities.map((city) => {
                        return (
                            <li key={city} style={{listStyle: 'none'}}>
                                <button className="btn shadow-none"
                                    onClick={()=>{fetchCurrentWeather(city)}}>
                                        {city}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}