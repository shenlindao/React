import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: JSON.parse(localStorage.getItem("catalog") || "[]"),
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        toggleAvailability: (state, action) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }
        }
    }
});

export const { setProducts, addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;

export const saveProductsToLocalStorage = () => (dispatch, getState) => {
    const { products } = getState().products;
    localStorage.setItem("catalog", JSON.stringify(products));
};

export const addProductAsync = (product) => (dispatch) => {
    const newProduct = { ...product, id: crypto.randomUUID() };
    dispatch(addProduct(newProduct));
    dispatch(saveProductsToLocalStorage());
};

export const deleteProductAsync = (productId) => (dispatch) => {
    dispatch(deleteProduct(productId));
    dispatch(saveProductsToLocalStorage());
};

export const updateProductAsync = (product) => (dispatch) => {
    dispatch(updateProduct(product));
    dispatch(saveProductsToLocalStorage());
};

export const toggleAvailabilityAsync = (productId) => (dispatch) => {
    dispatch(toggleAvailability(productId));
    dispatch(saveProductsToLocalStorage());
};

export default productsSlice.reducer;
