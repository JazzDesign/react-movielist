import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import categoryReducer from './categorySlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    category: categoryReducer,
  },
});