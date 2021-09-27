import {fork} from 'redux-saga/effects';
import { watchPrice, watchAccount } from './watchers';

export default function* rootSaga() {
    yield fork(watchPrice);
    yield fork(watchAccount);
}