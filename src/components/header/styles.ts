import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(10),
  },
  back: {
    marginLeft: wp(20),
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
});
