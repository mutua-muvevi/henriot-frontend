import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import assetsReducer from './assets/reducer';
import portfolioReducer from './portfolio/reducer';

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", "user", "assets", "portfolio"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	assets: assetsReducer,
	portfolio: portfolioReducer,

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;