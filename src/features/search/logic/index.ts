import Voice, {SpeechResultsEvent} from '@react-native-voice/voice';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useDebounce} from '../../../hooks/useDebounce';
import {requestSearchMovies, resetMovieStore} from '../../../redux/movieSlice';
import {Alert} from 'react-native';

export const useSearchFeature = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [usingVoice, setUsingVoice] = useState(false);
  const [listening, setListening] = useState(false);
  const dispatch = useDispatch<any>();

  const debouncedSearchQuery = useDebounce(searchQuery, 100);

  useEffect(() => {
    if (debouncedSearchQuery.length > 3) {
      dispatch(resetMovieStore());
      dispatch(requestSearchMovies(debouncedSearchQuery));
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    let speechTimeout: any;

    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
      clearTimeout(speechTimeout);
    };
  }, []);

  useEffect(() => {
    let speechTimeout: any;
    if (usingVoice) {
      setSearchQuery('');
      Voice.start('en-US');
      const timeoutDuration = 3000;
      speechTimeout = setTimeout(() => {
        Voice.stop();
      }, timeoutDuration);
    } else {
      setUsingVoice(false);
      Voice.stop();
    }

    return () => {
      clearTimeout(speechTimeout);
    };
  }, [usingVoice]);

  const onSpeechStartHandler = () => {
    setListening(true);
  };

  const onSpeechEndHandler = () => {
    setListening(false);
  };
  const onSpeechResultsHandler = (event: SpeechResultsEvent) => {
    setSearchQuery(`${event?.value?.[0]}`);
  };

  const onSpeechErrorHandler = () => {
    setUsingVoice(false);
    setListening(false);
    Alert.alert('Failed!', "you can't use voice right now");
  };

  return {
    searchQuery,
    setSearchQuery,
    usingVoice,
    setUsingVoice,
    listening,
  };
};
