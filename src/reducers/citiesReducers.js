import {createSlice} from '@reduxjs/toolkit';

export const citiesSlice = createSlice(
    {
        name: "cities",
        initialState: {
            value: []
        },
        reducers: {
            changeCities: (state,action) => {
                state.value = action.payload
            }
        }
    }
)

export const {changeCities} = citiesSlice.actions;
export default citiesSlice.reducer;