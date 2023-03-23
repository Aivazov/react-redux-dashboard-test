import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filtersReducer,
  },
});
