import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovies: (state, action) => {
      action.payload.map(movie => {
        return state.push(movie);
      });
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
    incrementLikes: (state, action) => {
      const index = state.findIndex((movie) => movie.id === action.payload.id);
      state[index].likes +=1;

    },
    incrementDislikes: (state, action) => {
      const index = state.findIndex((movie) => movie.id === action.payload.id);
      state[index].dislikes += 1;
    }
  },
});

export const { addMovies, deleteMovie, incrementLikes, incrementDislikes } = moviesSlice.actions;

export default moviesSlice.reducer;