import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Notification = ({ navigation }) => {

  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.mainHeading }}>Notification</Text>
    </View>
  );
}
export default Notification;