import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getListOfMovies,
  getRandomListOfMovies,
  getSingleMovie,
} from '../https/requests';
import {Movie, SearchMoviesResponse} from '../https/type';
import {MovieDetails} from '../screens/movie-details/type';
import {RootState} from './store';

interface MovieStore {
  movies: Array<Movie>;
  movieDetails: MovieDetails | null;
  loading: boolean;
  error: boolean;
}
const defaultState = {
  movies: [],
  loading: false,
  error: false,
  movieDetails: null,
};

const initialState: MovieStore = defaultState;

export const requestRandomMovies = createAsyncThunk(
  'movie/requestRandomMovies',
  async (_, thunkAPI) => {
    try {
      const response = await getRandomListOfMovies();
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const requestSearchMovies = createAsyncThunk(
  'movie/requestSearchMovies',
  async (searchQuery: string, thunkAPI) => {
    try {
      const response = await getListOfMovies(searchQuery);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue('An unexpected error occurred.');
    }
  },
);
export const requestSingleMovie = createAsyncThunk(
  'movie/requestSingleMovie',
  async (id: string, thunkAPI) => {
    try {
      const response = await getSingleMovie(id);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

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
