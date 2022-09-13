import {configureStore} from '@reduxjs/toolkit';
import citiesReducers from './reducers/citiesReducers';
import forecastReducer from './reducers/forecastReducer';
import weatherReducer from './reducers/weatherReducer';


export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer,
        cities: citiesReducers
    }
})