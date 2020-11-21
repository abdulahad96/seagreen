import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

import 'react-native-gesture-handler';

import Store from './src/redux/store';
import Navigator from './src/navigator';

const store = Store();

export default class App extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);
  // }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
