import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from './main/views/MainView';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
