import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => {


  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.mainHeading }}>Welcome</Text>
      <Text
        style={{ ...styles.mainHeading }}
        onPress={() => this.handleNavigation('SignIn')}>
        Go to Sign In
        </Text>
      <Text
        style={{ ...styles.mainHeading }}
        onPress={() => this.handleNavigation('App')}>
        Explore
        </Text>
    </View>
  );
  S
}
export default Home;