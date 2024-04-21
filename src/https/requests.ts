import axios, {AxiosResponse} from 'axios';
import {MovieDetails} from '../screens/movie-details/type';
import {API_KEY} from '../secrets';
import {SearchMoviesResponse} from './type';
import {searchTerms} from '../configs/constants';

const BASE_URL = `https://www.omdbapi.com/`;

const fetchMovies = async (
  searchTerm: string,
  page: number = 1,
): Promise<SearchMoviesResponse> => {
  const response: AxiosResponse<SearchMoviesResponse> = await axios.get(
    BASE_URL,
    {params: {apikey: API_KEY, s: searchTerm, page}},
  );

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error);
  }

  return response.data;
};

const getRandomListOfMovies = async (): Promise<SearchMoviesResponse> => {
  const randomTerm =
    searchTerms[Math.floor(Math.random() * searchTerms.length)];

  return fetchMovies(randomTerm, 1);
};

const getListOfMovies = async (
  searchTerm: string,
): Promise<SearchMoviesResponse> => fetchMovies(searchTerm, 1);

const getSingleMovie = async (imdbID: string): Promise<MovieDetails> => {
  const response = await axios.get(BASE_URL, {
    params: {apikey: API_KEY, i: imdbID},
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error);
  }

  return response.data;
};

export {getListOfMovies, getRandomListOfMovies, getSingleMovie};
