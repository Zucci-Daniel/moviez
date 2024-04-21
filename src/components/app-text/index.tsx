import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './type';

const AppText: React.FC<TextProps> = ({children, style}) => {
  return (
    <Text style={[{fontFamily: 'System', fontSize: 16}, style]}>
      {children}
    </Text>
  );
};

export default AppText;
