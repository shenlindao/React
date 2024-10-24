import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSizes: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleSize: (state, action) => {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter((s) => s !== size);
      } else {
        state.selectedSizes.push(size);
      }
    },
  },
});

export const { toggleSize } = filtersSlice.actions;

export default filtersSlice.reducer;