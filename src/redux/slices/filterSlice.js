import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brand: "Всі",
    sort: {
        name: "популярністю",
        prop: "rating",
      },
    asc: false,
    searchValue: '',
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        } ,
        setSort(state, action) {
            state.sort = action.payload;
        } ,      
        setAsc(state, action) {
            state.asc = action.payload;
        },
        setFilters(state, action){
            state.sort = action.payload.sort;
            state.brand = action.payload.cats;
            state.asc = Boolean(action.payload.asc);
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    }
})

export const { setBrand, setSort, setAsc, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
