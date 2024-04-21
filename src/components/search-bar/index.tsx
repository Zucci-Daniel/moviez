import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon, SpeakingIcon, VoiceIcon} from '../../assets/svg';
import {pallete} from '../../configs/colors';
import {detectTouch, iconSize} from '../../configs/constants';
import {styles} from './styles';
import {SearchBarProps} from './type';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onChange,
  onVoiceSearch,
  listening,
  value,
  onEndVoiceSearch,
}) => {
  return (
    <>
      <View style={styles.container}>
        <SearchIcon {...iconSize} />
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={pallete.grey}
          style={styles.input}
          onChangeText={onChange}
        />
        <TouchableOpacity
          hitSlop={detectTouch}
          onLongPress={onVoiceSearch}
          onPressOut={onEndVoiceSearch}>
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
