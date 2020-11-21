import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class VerificationCode extends Component {
  handleNavigation = (screenName) => {
    const {navigation} = this.props;
    navigation.navigate(screenName);
  };

  render() {
    return (
      <View style={{...styles.container}}>
        <Text style={{...styles.mainHeading}}>VerificationCode</Text>
        <Text
          style={{...styles.mainHeading}}
          onPress={() => this.handleNavigation('SignUp')}>
          Go to Sign Up
        </Text>
      </View>
    );
  }
}
