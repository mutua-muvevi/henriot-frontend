import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


import { persistStore } from 'redux-persist';

import persistedReducer from './rootreducer';

const middlewares = [logger, thunk];

const devToolsConfiguration = composeWithDevTools({
    trace: true,
})

export const store = createStore(
	persistedReducer,
	devToolsConfiguration(
		applyMiddleware(...middlewares)
	)
);

export const persistor = persistStore(store);