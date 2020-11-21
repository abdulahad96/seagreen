import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const BatchDetails = ({navigation})=> {

    return (
      <View style={{...styles.container}}>
        <Text style={{...styles.mainHeading}}>Favourite</Text>
      </View>
    );
}
export default BatchDetails;