import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/colors';
import {fs, wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.white,
  },
  writeUps: {
    gap: wp(20),
    padding: wp(20),
  },
  title: {
    fontSize: fs(18),
    fontWeight: 'bold',
    color: pallete.secondary,
  },
  description: {
    fontSize: fs(14),
  },
});
