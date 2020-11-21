import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import {Colors} from '../../theme';

export default class SpinnerLoader extends Component {
  static propTypes = {
    isloading: PropTypes.bool,
  };

  static defaultProps = {
    isloading: false,
  };

  render() {
    const {isloading} = this.props;
    return (
      <Spinner
        visible={isloading}
        color={Colors.Black}
        size="normal"
        customIndicator={
          <ActivityIndicator size="large" color={Colors.Persian_Green} />
        }
      />
    );
  }
}
