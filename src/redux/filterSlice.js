import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ''
    },
    reducers: {
        setFilterList(state, action) {
            state.filter = action.payload;

        }
    }
})

export const { setFilterList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;