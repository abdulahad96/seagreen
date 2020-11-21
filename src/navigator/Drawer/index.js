import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabsScreen from '../Bottom';

// import {Favourite, Settings, Feedback} from '../../containers';

// const FavouriteStack = createStackNavigator();
// const FavouriteStackScreen = () => (
//   <FavouriteStack.Navigator>
//     <FavouriteStack.Screen name="Favourite" component={Favourite} />
//   </FavouriteStack.Navigator>
// );
// const SettingsStack = createStackNavigator();
// const SettingsStackScreen = () => (
//   <SettingsStack.Navigator>
//     <SettingsStack.Screen name="Settings" component={Settings} />
//   </SettingsStack.Navigator>
// );
// const FeedbackStack = createStackNavigator();
// const FeedbackStackScreen = () => (
//   <FeedbackStack.Navigator>
//     <FeedbackStack.Screen name="Feedback" component={Feedback} />
//   </FeedbackStack.Navigator>
// );

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={BottomTabsScreen} />
    {/* <Drawer.Screen name="Favourite" component={FavouriteStackScreen} />
    <Drawer.Screen name="Settings" component={SettingsStackScreen} />
    <Drawer.Screen name="Feedback" component={FeedbackStackScreen} /> */}
  </Drawer.Navigator>
);

export default DrawerScreen;
