import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class SignIn extends Component {
  handleNavigation = (screenName) => {
    const {navigation} = this.props;
    navigation.navigate(screenName);
  };

  render() {
    return (
      <View style={{...styles.container}}>
        <Text style={{...styles.mainHeading}}>SignIn</Text>
        <Text
          style={{...styles.mainHeading}}
          onPress={() => this.handleNavigation('MobileVerification')}>
          Go to Mobile Verification
        </Text>
      </View>
    );
  }
}
