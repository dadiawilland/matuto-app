import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const persistConfig = {
        key: 'root',
        storage,
      };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return {
        ...createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(sagaMiddleware)),
        ),
        runSaga: sagaMiddleware.run(rootSaga),
    };
}

export default configureStore;