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
      placeholder="Search by typing or use voice..."
      onChange={setSearchQuery}
      onVoiceSearch={() => setUsingVoice(true)}
      onEndVoiceSearch={() => setUsingVoice(false)}
    />
  );
};

export default SearchFeature;
