import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {MarketPlace, BatchDetails, Seaweed, Home} from '../../containers';
import {Metrics, Fonts, Colors} from '../../theme';
import CustomTabBar from './TabBar';

const renderMaterialCommunityIcons = (name, color, size) => (
  <MaterialCommunityIcons name={name} color={color} size={size} />
);
const renderMaterialIcons = (name, color, size) => (
  <MaterialIcons name={name} color={color} size={size} />
);

const Landing = createStackNavigator();
const LandingStackScreen = () => (
  <Landing.Navigator headerMode="none">
    <Landing.Screen name="Home" component={Home} />
  </Landing.Navigator>
);
const BatchDetailStack = createStackNavigator();
const BatchDetailStackScreen = () => (
  <BatchDetailStack.Navigator headerMode="none">
    <BatchDetailStack.Screen name="BatchDetail" component={BatchDetails} />
  </BatchDetailStack.Navigator>
);
const SeaweedStack = createStackNavigator();
const SeaweedStackScreen = () => (
  <SeaweedStack.Navigator headerMode="none">
    <SeaweedStack.Screen name="Seaweed" component={Seaweed} />
  </SeaweedStack.Navigator>
);
const MarketPlaceStack = createStackNavigator();
const MarketPlaceStackScreen = () => (
  <MarketPlaceStack.Navigator headerMode="none">
    <MarketPlaceStack.Screen name="MarketPlace" component={MarketPlace} />
  </MarketPlaceStack.Navigator>
);

const BottomTabs = createBottomTabNavigator();
const BottomTabsScreen = () => (
  <BottomTabs.Navigator
    tabBar={props => <CustomTabBar {...props}/>}
    initialRouteName="Home">
    <BottomTabs.Screen
      name="Home"
      component={SeaweedStackScreen}
      options={{
        tabBarIcon: ({color, size}) =>
          renderMaterialCommunityIcons('access-point', color, size),
      }}
    />
    <BottomTabs.Screen
      name="Seaweed"
      component={SeaweedStackScreen}
      options={{
        tabBarIcon: ({color, size}) =>
          renderMaterialIcons('connected-tv', color, size),
      }}
    />
    <BottomTabs.Screen
      name="BatchDetails"
      component={BatchDetailStackScreen}
      options={{
        tabBarIcon: ({color, size}) =>
          renderMaterialCommunityIcons('fire', color, size),
      }}
    />
    <BottomTabs.Screen
      name="MarketPlace"
      component={MarketPlaceStackScreen}
      options={{
        tabBarIcon: ({color, size}) =>
          renderMaterialCommunityIcons('youtube', color, size),
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomTabsScreen;
