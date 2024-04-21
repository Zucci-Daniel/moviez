import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getListOfMovies,
  getRandomListOfMovies,
  getSingleMovie,
} from '../https/requests';
import {SearchMoviesResponse} from '../https/type';
import {MovieDetails} from '../screens/movie-details/type';
import {RootState} from './store';
import {MovieStore} from './type';

const defaultState = {
  movies: [],
  loading: false,
  error: false,
  movieDetails: null,
};
const initialState: MovieStore = defaultState;

const createAsyncThunkAction = (apiFunction: Function) => {
  return createAsyncThunk(
    `movie/${apiFunction.name}`,
    async (arg: any, thunkAPI) => {
      try {
        const response = await apiFunction(arg);
        return response;
      } catch (error: any) {
        const serializableError =
          typeof error === 'string' ? error : 'An unexpected error occurred.';
        return thunkAPI.rejectWithValue(serializableError);
      }
    },
  );
};

export const requestRandomMovies = createAsyncThunkAction(
  getRandomListOfMovies,
);
export const requestSearchMovies = createAsyncThunkAction(getListOfMovies);
export const requestSingleMovie = createAsyncThunkAction(getSingleMovie);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    resetMovieStore: (state: MovieStore) => {
      state = defaultState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestRandomMovies.pending, (state: MovieStore) => {
        state.loading = true;
      })
      .addCase(
        requestRandomMovies.fulfilled,
        (state: MovieStore, action: PayloadAction<SearchMoviesResponse>) => {
          state.loading = false;
          state.movies = action.payload.Search;
        },
      )
      .addCase(requestRandomMovies.rejected, (state: MovieStore) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(requestSearchMovies.pending, (state: MovieStore) => {
        state.loading = true;
      })
      .addCase(
        requestSearchMovies.fulfilled,
        (state: MovieStore, action: PayloadAction<SearchMoviesResponse>) => {
          state.loading = false;
          state.movies = action.payload.Search;
        },
      )
      .addCase(requestSearchMovies.rejected, (state: MovieStore) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(requestSingleMovie.pending, (state: MovieStore) => {
        state.loading = true;
      })
      .addCase(
        requestSingleMovie.fulfilled,
        (state: MovieStore, action: PayloadAction<MovieDetails>) => {
          state.loading = false;
          state.movieDetails = action.payload;
        },
      )
      .addCase(requestSingleMovie.rejected, (state: MovieStore) => {
        state.loading = false;
        state.error = false;
      });
  },
});

export const {resetMovieStore} = movieSlice.actions;

export const selectMovieState = (state: RootState) => state.movies;

export default movieSlice.reducer;
