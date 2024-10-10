import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: JSON.parse(localStorage.getItem("catalog") || "[]"),
};

const saveToLocalStorage = (products) => {
    localStorage.setItem("catalog", JSON.stringify(products));
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = { ...action.payload, id: crypto.randomUUID() };
            state.products.push(newProduct);
            saveToLocalStorage(state.products);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            saveToLocalStorage(state.products);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
                saveToLocalStorage(state.products);
            }
        },
        toggleAvailability: (state, action) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.available = !product.available;
                saveToLocalStorage(state.products);
            }
        }
    }
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;
