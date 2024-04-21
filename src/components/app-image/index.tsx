import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';

const AppImage = ({uri, height}: {uri: string; height?: number}) => {
  const appImageStyles = styles({height});
  return <Image source={{uri}} style={appImageStyles.image} />;
};

export default AppImage;
