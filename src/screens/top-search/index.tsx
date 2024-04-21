import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {EmptyIcon} from '../../assets/svg';
import {MovieCard, SearchBar} from '../../components';
import Header from '../../components/header';
import {Movie} from '../../components/movie-card/type';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {routes} from '../../routers/router-constants/routes';
import {styles} from './styles';

const TopSearchesScreen = ({navigation}: GlobalScreenTypes) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [usingVoice, setUsingVoice] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Header text={'Top Searches'} show={false} />
        <SearchBar
          value={searchQuery}
          listening={usingVoice}
          placeholder="Search..."
          onChange={setSearchQuery}
          onVoiceSearch={() => {
            setUsingVoice(!usingVoice);
          }}
        />
        <FlatList
          ListEmptyComponent={<EmptyIcon style={{alignSelf: 'center'}} />}
          data={movies}
          keyExtractor={item => item.id.toString()}
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

const movies: Movie[] = [
  {
    genres: 'Afro',
    id: 1,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  {
    genres: 'Afro',
    id: 12,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  {
    genres: 'Afro',
    id: 13,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  {
    genres: 'Afro',
    id: 132,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  {
    genres: 'Afro',
    id: 1322,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  {
    genres: 'Afro',
    id: 12323,
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/16/01/clothes-1846128_1280.jpg',
    title: 'French',
  },
  // Populate this array with movie data
];
