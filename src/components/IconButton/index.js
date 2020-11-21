import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import {Metrics, Colors} from '../../theme';

const IconContainer = ({headerText, customStyle, title}) => {
  return (
    <View
      style={[styles.container, customStyle]}>
      <View
        style={{
          width: Metrics.screenWidth * 0.2,
          height: Metrics.screenWidth * 0.2,
          backgroundColor: 'red',
        }}></View>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

IconContainer.propTypes = {
  headerText: PropTypes.string,
  customStyle: PropTypes.object,
  title: PropTypes.string
};

IconContainer.defaultProps = {
  headerText: '',
  customStyle: undefined,
  title: undefined
};
export default IconContainer;
