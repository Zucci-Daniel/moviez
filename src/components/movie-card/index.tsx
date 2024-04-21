import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppImage} from '..';
import AppText from '../app-text';
import {styles} from './styles';
import {MovieCardProps} from './type';

const MovieCard: React.FC<MovieCardProps> = ({movie, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <AppImage uri={movie.Poster} />
      <AppText style={styles.title}>{movie.Title}</AppText>
      <AppText style={styles.genres}>{movie.Type}</AppText>
    </TouchableOpacity>
  );
};

export default MovieCard;
