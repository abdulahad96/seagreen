import AsyncStorage from '@react-native-community/async-storage';
import {take, put, call, fork} from 'redux-saga/effects';

import * as types from '../actions/ActionTypes';
import {success, failure} from '../actions/Login';

import ApiSauce from '../../services/apiSauce';
import {login_Api, initializeToken} from '../../config/WebServices';
import {ErrorHelper} from '../../helpers';

function callRequest(data) {
  return ApiSauce.post(login_Api, data);
}

async function storeToken(response) {
  try {
    await AsyncStorage.setItem('access_token', response.data.access_token);
    await initializeToken();
  } catch (e) {}
}

async function storeLoginResponce(response) {
  try {
    await AsyncStorage.setItem('loginResponce', JSON.stringify(response));
  } catch (e) {}
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.LOGIN.REQUEST);
    console.log(payload,"aaaaaaaaa")
    try {
      const response = yield call(callRequest, payload);
      yield call(storeToken, response);
      yield call(storeLoginResponce, response);
      yield put(success(response));
    } catch (err) {
      yield put(failure(err));
      ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
