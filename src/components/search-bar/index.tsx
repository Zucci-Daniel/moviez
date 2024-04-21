import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon, SpeakingIcon, VoiceIcon} from '../../assets/svg';
import {pallete} from '../../configs/Colors';
import {iconSize} from '../../configs/Constants';
import {styles} from './styles';
import {SearchBarProps} from './type';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  onVoiceSearch,
  listening,
  value,
}) => {
  return (
    <>
      <View style={styles.container}>
        <SearchIcon {...iconSize} />
        <TextInput
          value={value}
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={onVoiceSearch}>
          {listening ? (
            <SpeakingIcon {...iconSize} fill={pallete.primary} />
          ) : (
            <VoiceIcon {...iconSize} />
          )}
        </TouchableOpacity>
      </View>
      {listening && <View style={styles.sub}></View>}
    </>
  );
};

export default SearchBar;
