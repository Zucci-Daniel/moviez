import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestRandomMovies, selectMovieState} from '../../../redux/movieSlice';

export const useTopSearch = () => {
  const dispatch = useDispatch<any>();

  const {movies, error, loading} = useSelector(selectMovieState);

  useEffect(() => {
    dispatch(requestRandomMovies(1));
  }, []);

  return {
    movies,
    error,
    loading,
  };
};
