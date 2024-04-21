import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const styles = ({height}: {height?: number}) =>
  StyleSheet.create({
    image: {
      width: '100%',
      height: wp(height || 150),
      resizeMode: 'cover',
      backgroundColor: 'gray',
    },
  });
