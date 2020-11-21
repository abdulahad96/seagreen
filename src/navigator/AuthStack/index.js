import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SignIn,
  SignUp,
} from '../../containers';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>

    <AuthStack.Screen name="SignIn" component={SignIn} />
    
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
