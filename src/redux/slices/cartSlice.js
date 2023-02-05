import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: [],
    item: [],
    totalPrice: 0,
    totalCount: 0,
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
        addItem: (state, action) => {
            const sorteditems = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
            if(sorteditems) {
                sorteditems.count++
            }
            else {
                state.item.push({...action.payload});
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        plusItem: (state, action) => {
            const sorteditems = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
            if(sorteditems) {
                sorteditems.count++
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        minusItem: (state, action) => {
            const sorteditems = state.item.find(obj => obj.id === action.payload.id && obj.size === action.payload.size)
            if(sorteditems) {
                sorteditems.count--
            }
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        },
        removeItem: (state, action) => {
            state.item = state.item.filter(obj => obj.id !== action.payload.id || obj.size !== action.payload.size)
            state.totalPrice = state.item.reduce((sum, item) => sum + item.price * item.count, 0
            )
            state.totalCount = state.item.reduce((sum, item) => sum + item.count, 0)
        }
    }
})

export const { setLike, removeLike, addItem, plusItem, minusItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
