import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/colors';
import {fs, wp} from '../../configs/config';

export const styles = StyleSheet.create({
  card: {
    marginVertical: fs(8),
    backgroundColor: pallete.white,
    borderRadius: fs(8),
    overflow: 'hidden',
    elevation: fs(3),
  },
  image: {
    width: '100%',
    height: wp(150),
    resizeMode: 'cover',
    backgroundColor: pallete.grey,
  },
  title: {
    fontSize: fs(18),
    fontWeight: 'bold',
    margin: fs(8),
  },
  genres: {
    fontSize: fs(14),
    color: pallete.grey,
    marginBottom: wp(8),
    marginLeft: wp(8),
  },
});
