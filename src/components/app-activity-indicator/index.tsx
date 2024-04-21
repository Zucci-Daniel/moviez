import React, {FunctionComponent} from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import {pallete} from '../../configs/colors';

const AppActivityIndicator: FunctionComponent<{
  style?: ViewStyle;
  size?: number;
}> = ({style, size = 20}) => {
  return (
    <ActivityIndicator style={style} size={size} color={pallete.primary} />
  );
};

export default AppActivityIndicator;
