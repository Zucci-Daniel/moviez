import React from 'react';
import {FlatList, View} from 'react-native';
import {EmptyIcon} from '../../assets/svg';
import {MovieCard} from '../../components';
import AppActivityIndicator from '../../components/app-activity-indicator';
import Header from '../../components/header';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import SearchFeature from '../../features/search';
import {routes} from '../../routers/router-constants/routes';
import {useTopSearch} from './logic';
import {styles} from './styles';

const TopSearchesScreen = ({navigation}: GlobalScreenTypes) => {
  const {error, loading, movies} = useTopSearch();

  return (
    <>
      <View style={styles.container}>
        <Header text={'Top Searches'} show={false} />
        <SearchFeature />
        {loading ? <AppActivityIndicator /> : <></>}
        <FlatList
          extraData={movies}
          ListEmptyComponent={<EmptyIcon style={{alignSelf: 'center'}} />}
          data={movies}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item}) => (
            <MovieCard
              movie={item}
              onPress={() => navigation.navigate(routes.MOVIE_DETAILS, {item})}
            />
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

export default TopSearchesScreen;
