import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", 
	],
};

const rootReducer = combineReducers({
	auth: authReducer,

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;