import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  genres: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    marginLeft: 8,
  },
});
