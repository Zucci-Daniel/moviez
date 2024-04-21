import {useRoute} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {AppImage, AppText} from '../../components';
import Header from '../../components/header';
import {Movie} from '../../components/movie-card/type';
import {screenHeight} from '../../configs/Constants';
import {wp} from '../../configs/config';
import {styles} from './styles';

const MovieDetails: FunctionComponent = () => {
  const route = useRoute();
  const {params} = route;
  const {item} = params as {item: Movie};

  return (
    <View style={styles.container}>
      <Header text={`Details of ${item.title}`} />
      <View>
        <AppImage uri={item.image} height={screenHeight / 3} />
      </View>
      <View style={styles.writeUps}>
        <Detail title={item.title} description="dsfsfsdfsdfsdf" />
      </View>
    </View>
  );
};

export default MovieDetails;

const Detail = ({description, title}: {title: string; description: string}) => {
  return (
    <View style={{gap: wp(20)}}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.description}>{description}</AppText>
    </View>
  );
};
