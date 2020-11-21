import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MapLocation = ({ navigation }) => {

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.mainHeading }}>Live</Text>
    </View>
  );
}
export default MapLocation;