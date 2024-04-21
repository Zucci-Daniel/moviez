import {Movie} from '../https/type';
import {MovieDetails} from '../screens/movie-details/type';

export interface MovieStore {
  movies: Array<Movie>;
  movieDetails: MovieDetails | null;
  loading: boolean;
  error: boolean;
}
