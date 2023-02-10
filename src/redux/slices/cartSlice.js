import { createSlice } from "@reduxjs/toolkit";
import { calcTotalCount, calcTotalPrice } from "../../utils/calcCartValue";



const getJSONcartStorage = () => {
    const dataLike = localStorage.getItem('like')
    const like = dataLike ? JSON.parse(dataLike) : []
    const dataItem = localStorage.getItem('item')
    const item = dataItem ? JSON.parse(dataItem) : []
    const totalCount = calcTotalCount(item)
    const totalPrice = calcTotalPrice(item)
    return {
        like,
        item,
        totalCount,
        totalPrice,
    }
}

const { like, item, totalCount, totalPrice } = getJSONcartStorage()

const initialState = {
    like,
    item,
    totalPrice,
    totalCount,
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
        },
        clearCart: (state) => {
            state.item = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
})

export const { setLike, removeLike, addItem, plusItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
