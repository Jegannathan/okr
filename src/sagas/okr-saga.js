import {put, call} from 'redux-saga/effects';
import {getObjectKeyResults} from '../api/okr';
import {updateOkrs, updateLoaderIndicator} from '../actions';

export const getOkrResults = function* () {
  try {
    yield put(updateLoaderIndicator(true))
    const okrResults = yield call(getObjectKeyResults);
    yield put(updateOkrs(okrResults.data));
    yield put(updateLoaderIndicator(false))
  } catch (error) {
    console.log('error')
    yield put(updateLoaderIndicator(false))
    yield put(updateOkrs([]));
  }
};
