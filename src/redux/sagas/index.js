import {fork} from 'redux-saga/effects';

import login from './Login';

export default function* rootSaga() {
  yield fork(login);
}
