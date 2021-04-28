import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: 'All',
  },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { updateCategory } = categorySlice.actions;

export default categorySlice.reducer;