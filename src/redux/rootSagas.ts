import { all, fork } from 'redux-saga/effects';
import * as accountSaga from './sagas/TemplateSaga';

export function* rootSaga() {
  yield all([...Object.values(accountSaga)].map(fork));
}
