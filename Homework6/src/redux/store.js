import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;