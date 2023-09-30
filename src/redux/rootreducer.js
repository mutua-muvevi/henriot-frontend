import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";

import activityReducer from './activity/reducer';
import assetsReducer from './assets/reducer';
import orderReducer from './order/reducer';
import portfolioReducer from './portfolio/reducer';
import positionReducer from './position/reducer';

const config = {
	key: 'root',
	storage,
	whitelist: [
		"auth", "user", "assets", "portfolio", "order", "position", "activity"
	],
};

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,

	activity: activityReducer,
	assets: assetsReducer,
	order: orderReducer,
	portfolio: portfolioReducer,
	position: positionReducer
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;