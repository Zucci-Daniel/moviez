import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MovieDetails, TopSearchesScreen} from '../../screens';
import {routes} from '../router-constants/routes';

const AuthStack = createStackNavigator();

function MainNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={routes.TOP_SEARCH}
        component={TopSearchesScreen}
      />
      <AuthStack.Screen name={routes.MOVIE_DETAILS} component={MovieDetails} />
    </AuthStack.Navigator>
  );
}

function NavigationProvider() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default NavigationProvider;
