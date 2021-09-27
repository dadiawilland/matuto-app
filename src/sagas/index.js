import {fork} from 'redux-saga/effects';
import { watchPrice, watchAccount, watchAdmin } from './watchers';

export default function* rootSaga() {
    yield fork(watchPrice);
    yield fork(watchAccount);
    yield fork(watchAdmin);
}