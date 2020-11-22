import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {Header} from '../../components';
import {Colors, Metrics} from '../../theme';

const MarketPlace = ({navigation}) => {
  const renderRow = data => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[data?.isTiny ? styles.smallText : styles.LargeText]}>
          {data.firstTitle}
        </Text>
        <Text style={[data?.isTiny ? styles.smallText : styles.LargeText]}>
          {data.secondTitle}
        </Text>
      </View>
    );
  };
  return (
    <View style={{...styles.container}}>
      <Text>Market Place</Text>
    </View>
  );
};
export default MarketPlace;
