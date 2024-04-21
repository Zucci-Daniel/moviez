import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Movie} from '../../../https/type';
import {requestSingleMovie, selectMovieState} from '../../../redux/movieSlice';

export const useMovieDetails = () => {
  const dispatch = useDispatch<any>();
  const route = useRoute();
  const {params} = route;
  const {item} = params as {item: Movie};
  const {error, loading, movieDetails} = useSelector(selectMovieState);

  useEffect(() => {
    dispatch(requestSingleMovie(item.imdbID));
  }, []);

  return {
    error,
    loading,
    movieDetails,
  };
};
