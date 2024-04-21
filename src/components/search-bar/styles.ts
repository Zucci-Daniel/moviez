import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';
import {fs, wp} from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    padding: wp(10),
    backgroundColor: pallete.white,
    borderRadius: wp(20),
    margin: wp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(20),
  },
  input: {
    fontSize: fs(16),
    flex: 1,
  },
  sub: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: pallete.primary,
    borderRadius: wp(20),
    marginBottom: wp(20),
  },
});
