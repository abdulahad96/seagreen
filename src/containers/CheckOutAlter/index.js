import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class Shows extends Component {
  render() {
    return (
      <View style={{...styles.container}}>
        <Text style={{...styles.mainHeading}}>Shows</Text>
      </View>
    );
  }
}
