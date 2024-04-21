import React from 'react';
import {Image} from 'react-native';
import {DUMMY_IMAGE} from '../../configs/constants';
import {styles} from './styles';

const AppImage = ({uri, height}: {uri: string; height?: number}) => {
  const appImageStyles = styles({height});
  return (
    <Image
      source={{uri: uri.includes('http') ? uri : DUMMY_IMAGE}}
      style={appImageStyles.image}
    />
  );
};

export default AppImage;
