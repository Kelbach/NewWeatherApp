import {configureStore} from '@reduxjs/toolkit';
import forecastReducer from './reducers/forecastReducer';
import weatherReducer from './reducers/weatherReducer';


export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        forecast: forecastReducer
    }
})