import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/colors';
import {fs, wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.white,
  },
  header: {
    fontSize: fs(24),
    fontWeight: 'bold',
    margin: wp(10),
  },
  list: {
    paddingHorizontal: wp(10),
  },
  sub: {
    height: wp(50),
    width: '100%',
    backgroundColor: pallete.primary,
  },
});
