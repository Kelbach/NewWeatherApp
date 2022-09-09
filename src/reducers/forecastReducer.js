import {createSlice} from '@reduxjs/toolkit';

export const forecastSlice = createSlice(
    {
        name: "forecast",
        initialState: {},
        reducers: {
            changeForecast: (state,action) => {
                state.value = action.payload
            }
        } 
    }
)

export const {changeForecast} = forecastSlice.actions;
export default forecastSlice.reducer;
