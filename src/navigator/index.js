import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerScreen from './Drawer';
import AuthStackScreen from './AuthStack';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Auth" component={AuthStackScreen} />
    <RootStack.Screen name="App" component={DrawerScreen} />
  </RootStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);
