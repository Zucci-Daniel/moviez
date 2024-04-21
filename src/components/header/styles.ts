import {StyleSheet} from 'react-native';
import {fs, wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(10),
  },
  back: {
    marginLeft: wp(5),
  },
  header: {
    fontSize: fs(24),
    fontWeight: 'bold',
    margin: wp(10),
  },
});
