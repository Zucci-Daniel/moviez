import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useDebounce} from '../../../hooks/useDebounce';
import {requestSearchMovies, resetMovieStore} from '../../../redux/movieSlice';
import {useVoiceSearch} from './use-voice-search';

export const useSearchFeature = () => {
  const dispatch = useDispatch<any>();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 100);

  //VOICE TO SPEECH FEATURE:BONUS
  const {listening, text, setListening, setUsingVoice, usingVoice} =
    useVoiceSearch({
      startVoiceCallback: () => setSearchQuery(''),
      callbackWhenTextChanges: () => setSearchQuery(text),
    });

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
    listening,
    setListening,
  };
};
