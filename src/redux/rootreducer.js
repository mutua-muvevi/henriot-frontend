import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import assetsReducer from './assets/reducer';

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", "user", "assets"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	assets: assetsReducer

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;