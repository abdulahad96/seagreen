import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const IconContainer = ({headerText, customStyle, title, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      onPress = {onPress}>
      <View
        style={{
          width: Metrics.screenWidth * 0.2,
          height: Metrics.screenWidth * 0.2,
          backgroundColor: 'red',
        }}></View>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

IconContainer.propTypes = {
  headerText: PropTypes.string,
  customStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func
};

IconContainer.defaultProps = {
  headerText: '',
  customStyle: undefined,
  title: undefined,
  onPress: undefined
};
export default IconContainer;
