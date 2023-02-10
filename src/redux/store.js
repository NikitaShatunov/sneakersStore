import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import data from './slices/sneakersFetchSlice';
import cart from './slices/cartSlice'
import deliver from './slices/deliverySlice';

export const store = configureStore({
  reducer: {
    data,
    filter,
    cart,
    deliver,
  },
});