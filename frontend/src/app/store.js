import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from '../features/productSlice'
import { productsApi } from '../features/productsApi';
import cartReducer, { getTotals } from '../features/cartSlice';
import authReducer, { loadUser } from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        products:productsReducer,
        cart:cartReducer,
        auth:authReducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(productsApi.middleware)
    
  })

store.dispatch(productsFetch());
store.dispatch(getTotals())
store.dispatch(loadUser(null));