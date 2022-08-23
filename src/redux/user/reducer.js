import userTypes from './types';

const initialState = {
	loading: false,
	me: null,
	single: null,
	users: null,
	admin: null,
	error: undefined,
	authenticated: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.START_FETCH_USER:
			return { 
				...state,
				loading: true,
				me: null,
				single: null,
				users: null,
				admin: null,
				error: undefined,
				authenticated: false
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				me: payload,
				single: null,
				users: null,
				admin: null,
				error: undefined,
				authenticated: false
				
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				me: null,
				single: null,
				users: null,
				admin: null,
				error: payload,
				authenticated: false
			};


		default:
			return state;
	}
};

export default userReducer;