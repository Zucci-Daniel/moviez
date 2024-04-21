import {StyleSheet} from 'react-native';
import {pallete} from '../../configs/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  sub: {
    height: 50,
    width: '100%',
    backgroundColor: pallete.primary,
  },
});
