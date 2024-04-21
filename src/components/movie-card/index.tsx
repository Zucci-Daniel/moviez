import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AppText from '../app-text';
import {styles} from './styles';
import {MovieCardProps} from './type';

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: movie.image}} style={styles.image} />
      <AppText style={styles.title}>{movie.title}</AppText>
      <AppText style={styles.genres}>{movie.genres}</AppText>
    </TouchableOpacity>
  );
};

export default MovieCard;
