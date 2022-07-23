import authTypes from './types';

const initialState = {
	token: null,
	data: null,
	isLoading: false,
	isAuthenticated: false,
	errMessage: null,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authTypes.START_REGISTER_USER:
			console.log("STARTING", initialState)
			return { 
				...state, 
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
			};
		case authTypes.SUCCESS_REGISTER_USER:
			console.log("SUCCESS REGISTER", initialState)
			return {
				...state,
				token: payload,
				data: null,
				isLoading: false,
				isAuthenticated: true,
				errMessage: null,
			};
		case authTypes.FAIL_REGISTER_USER:
			return {
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: payload,
			};
		

		case authTypes.START_LOGIN_USER:
			return { 
				...state, 
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
			};
		case authTypes.SUCCESS_LOGIN_USER:
			return {
				...state,
				token: payload,
				data: null,
				isLoading: false,
				isAuthenticated: true,
				errMessage: null,
			};
		case authTypes.FAIL_LOGIN_USER:
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: payload,
			};
		

			
		case authTypes.START_FORGOT_PASSWORD:
			return {
				...state,
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
			}

		case authTypes.SUCCESS_FORGOT_PASSWORD: 
			return {
				...state,
				token: null,
				data: payload,
				isLoading: false,
				isAuthenticated: false,
				errMessage: null,
			}

		case authTypes.FAIL_FORGOT_PASSWORD: 
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: payload
			}
		

			
		case authTypes.START_RESET_PASSWORD:
			return {
				...state,
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
			}

		case authTypes.SUCCESS_RESET_PASSWORD: 
			return {
				...state,
				token: null,
				data: payload,
				isLoading: false,
				isAuthenticated: false,
				errMessage: null,
			}

		case authTypes.FAIL_RESET_PASSWORD: 
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: payload,
				
			}

		default:
			return state;
	}
};

export default authReducer;