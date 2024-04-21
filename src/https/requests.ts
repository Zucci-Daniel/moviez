import axios, {AxiosResponse} from 'axios';
import {API_KEY} from '../secrets';
import {SearchMoviesResponse} from './type';
import {MovieDetails} from '../screens/movie-details/type';

const BASE_URL = `https://www.omdbapi.com/`;

const fetchMovies = async (
  searchTerm: string,
  page: number = 1,
): Promise<SearchMoviesResponse> => {
  try {
    const response: AxiosResponse<SearchMoviesResponse> = await axios.get(
      BASE_URL,
      {
        params: {
          apikey: API_KEY,
          s: searchTerm,
          page,
        },
      },
    );

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('An error occurred while fetching the movies.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};

const getRandomListOfMovies = async (
  page: number = 1,
): Promise<SearchMoviesResponse> => {
  const searchTerms = [
    'Action',
    'Comedy',
    'Romance',
    'Sci-Fi',
    'Horror',
    'Drama',
    'Fantasy',
    'Adventure',
    'Thriller',
    'Documentary',
  ];
  const randomTerm =
    searchTerms[Math.floor(Math.random() * searchTerms.length)];

  return fetchMovies(randomTerm, page);
};

const getListOfMovies = async (
  searchTerm: string,
): Promise<SearchMoviesResponse> => {
  return fetchMovies(searchTerm, 1);
};

const getSingleMovie = async (imdbID: string): Promise<MovieDetails> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error);
    }
    console.log(JSON.stringify(response.data, null, 2), ' see only');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('An error occurred while fetching the movie.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};

export {getListOfMovies, getRandomListOfMovies, getSingleMovie};
