import {createSlice} from '@reduxjs/toolkit';

export const weatherSlice = createSlice(
    {
        name: "weather",
        initialState: {},
        reducers: {
            changeWeather: (state,action) => {
                state.value = action.payload
            }
        }
    }
)

export const {changeWeather} = weatherSlice.actions;
export default weatherSlice.reducer;