import Voice, {SpeechResultsEvent} from '@react-native-voice/voice';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useVoiceSearch = ({
  startVoiceCallback = () => null,
  callbackWhenTextChanges = () => null,
}: {
  startVoiceCallback: () => void;
  callbackWhenTextChanges: () => void;
}) => {
  const [text, setText] = useState('');
  const [usingVoice, setUsingVoice] = useState(false);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let speechTimeout: string | number | NodeJS.Timeout | undefined;

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
    let speechTimeout: string | number | NodeJS.Timeout | undefined;
    if (usingVoice) {
      startVoiceCallback();
      setText('');
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

  useEffect(() => {
    callbackWhenTextChanges();
  }, [text]);

  const onSpeechStartHandler = () => {
    setListening(true);
  };

  const onSpeechEndHandler = () => {
    setListening(false);
  };
  const onSpeechResultsHandler = (event: SpeechResultsEvent) => {
    setText(`${event?.value?.[0]}`);
  };

  const onSpeechErrorHandler = () => {
    setUsingVoice(false);
    setListening(false);
    Alert.alert('Failed!', "you can't use voice right now");
  };

  return {
    onSpeechStartHandler,
    onSpeechEndHandler,
    onSpeechResultsHandler,
    onSpeechErrorHandler,
    text,
    listening,
    setUsingVoice,
    setListening,
    usingVoice,
  };
};
