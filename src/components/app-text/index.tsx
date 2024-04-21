import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './type';
import {fs} from '../../configs/config';

const AppText: React.FC<TextProps> = ({children, style}) => {
  return (
    <Text style={[{fontFamily: 'System', fontSize: fs(16)}, style]}>
      {children}
    </Text>
  );
};

export default AppText;
