import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MarketPlace = ({ navigation }) => {

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.mainHeading }}>marketPlace</Text>
    </View>
  );
}
export default MarketPlace;
