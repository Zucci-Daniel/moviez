import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useDebounce} from '../../../hooks/useDebounce';
import {requestSearchMovies, resetMovieStore} from '../../../redux/movieSlice';

export const useSearchFeature = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [usingVoice, setUsingVoice] = useState(false);
  const dispatch = useDispatch<any>();

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedSearchQuery.length > 3) {
      dispatch(resetMovieStore());
      dispatch(requestSearchMovies(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    usingVoice,
    setUsingVoice,
  };
};
