import React from 'react';
import {SearchBar} from '../../components';
import {useSearchFeature} from './logic';

const SearchFeature = () => {
  const {searchQuery, setSearchQuery, setUsingVoice, usingVoice} =
    useSearchFeature();
  return (
    <SearchBar
      value={searchQuery}
      listening={usingVoice}
      placeholder="Search..."
      onChange={setSearchQuery}
      onVoiceSearch={() => {
        setUsingVoice(!usingVoice);
      }}
    />
  );
};

export default SearchFeature;
