import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from '../features/productSlice'
import { productsApi } from '../features/productsApi';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        products:productsReducer,
        cart:cartReducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(productsApi.middleware)
    
  })

// store.dispatch(productsFetch());