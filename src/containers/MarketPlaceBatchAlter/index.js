import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MarketPlaceBatchAlter = ({ navigation }) => {


  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.mainHeading }}>MobileVerification</Text>
      <Text
        style={{ ...styles.mainHeading }}
        onPress={() => this.handleNavigation('VerificationCode')}>
        Abc
        </Text>
    </View>
  );
}
export default MarketPlaceBatchAlter;
