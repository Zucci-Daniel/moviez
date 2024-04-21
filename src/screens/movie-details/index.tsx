import React from 'react';
import {ScrollView, View} from 'react-native';
import {AppImage, AppText} from '../../components';
import AppActivityIndicator from '../../components/app-activity-indicator';
import Header from '../../components/header';
import {wp} from '../../configs/config';
import {screenHeight} from '../../configs/constants';
import {useMovieDetails} from './logic';
import {styles} from './styles';

const MovieDetails = () => {
  const {loading, movieDetails} = useMovieDetails();

  const renderMovieDetails = () => {
    if (movieDetails) {
      return Object.entries(movieDetails).map(([key, value]) => {
        if (key === 'Ratings') {
          return <Detail key={key} title={key} description={value[0]?.Value} />;
        } else {
          return <Detail key={key} title={key} description={value} />;
        }
      });
    } else null;
  };
  return (
    <ScrollView style={styles.container}>
      <Header text={`Details`} />
      {loading ? (
        <AppActivityIndicator />
      ) : (
        <>
          <View>
            <AppImage
              uri={`${movieDetails?.Poster}`}
              height={screenHeight / 3}
            />
          </View>
          <View style={styles.writeUps}>{renderMovieDetails()}</View>
        </>
      )}
    </ScrollView>
  );
};

export default MovieDetails;

const Detail = ({description, title}: {title: string; description: any}) => {
  return (
    <View style={{gap: wp(20)}}>
      <AppText style={styles.title}>{title}</AppText>
      {typeof description === 'object' ? (
        Object.entries(description).map(([key, value]) => (
          <View key={key}>
            <AppText style={styles.description}>{`${key}: ${value}`}</AppText>
          </View>
        ))
      ) : (
        <AppText style={styles.description}>{description}</AppText>
      )}
    </View>
  );
};
