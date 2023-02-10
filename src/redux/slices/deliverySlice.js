import { createSlice } from "@reduxjs/toolkit";

const initialState = {
type: '',
pay: '',
post: '',
adress: {},
}
const deliverySlice = createSlice ({
    name: 'deliver',
    initialState,
    reducers: {
        setDeliveryType(state, action) {
            state.type = action.payload;
        },
        setPayType(state, action) {
            state.pay = action.payload;
        },
        setPostBranch(state,action){
            state.post = action.payload;
        },
        setAdress(state,action){
            state.adress = action.payload;
        },
        removeDeliverSlice(state){
            state.adress = {}
            state.post = ''
            state.pay = ''
            state.type = ''
        }
    }
})
export const { setDeliveryType, setPayType, setPostBranch, setAdress, removeDeliverSlice } = deliverySlice.actions
export default deliverySlice.reducer;