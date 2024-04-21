import React from 'react';
import {SearchBar} from '../../components';
import {useSearchFeature} from './logic';

const SearchFeature = () => {
  const {searchQuery, setSearchQuery, setUsingVoice, listening} =
    useSearchFeature();
  return (
    <SearchBar
      value={searchQuery}
      listening={listening}
      placeholder="Search or long press icon for voice"
      onChange={setSearchQuery}
      onVoiceSearch={() => setUsingVoice(true)}
      onEndVoiceSearch={() => setUsingVoice(false)}
    />
  );
};

export default SearchFeature;
