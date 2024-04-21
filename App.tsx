import React from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationProvider from './src/routers/navigation';

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationProvider />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
};

export default App;
