import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: [],
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLike(state, action) {
            state.like.push({...action.payload});
        } ,
        removeLike: (state, action) => {
            state.like = state.like.filter(item => item.title !== action.payload);
          },
    }
})

export const { setLike, removeLike } = cartSlice.actions;

export default cartSlice.reducer;
