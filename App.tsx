import React from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopSearchesScreen from './src/screens/top-search';

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <TopSearchesScreen />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
};

export default App;
