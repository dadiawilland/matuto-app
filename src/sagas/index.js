import {fork} from 'redux-saga/effects';
import { watchPrice } from './watchers';

export default function* rootSaga() {
    yield fork(watchPrice);
}