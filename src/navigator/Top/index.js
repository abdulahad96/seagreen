import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Favourite, Settings, Feedback} from '../../containers';

const LiveTopTab = createMaterialTopTabNavigator();
export const LiveTopTabScreen = () => (
  <LiveTopTab.Navigator initialRouteName="Home">
    <LiveTopTab.Screen name="LiveFavourite" component={Favourite} />
    <LiveTopTab.Screen name="LiveSettings" component={Settings} />
    <LiveTopTab.Screen name="LiveFeedback" component={Feedback} />
  </LiveTopTab.Navigator>
);
