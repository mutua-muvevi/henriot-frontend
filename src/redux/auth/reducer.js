import authTypes from './types';

const initialState = {
	token: "",
	data: {},
	user: {},
	isLoading: false,
	isAuthenticated: false,
	errMessage: "",
	error: {},
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authTypes.START_REGISTER_USER:
			return { 
				...state, 
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
			};
		case authTypes.SUCCESS_REGISTER_USER:
			return {
				...state,
				token: payload.data.token,
				data: null,
				user: payload.data.user,
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

		
		case authTypes.START_ACCOUNT_SETUP:
			return { 
				...state,
				isLoading: true,
				isAuthenticated: false,
			};
		case authTypes.SUCCESS_ACCOUNT_SETUP:
			return {
				...state,
				user: payload.data.data.user,
				isLoading: false,
				isAuthenticated: true,
				errMessage: null,
			};
		case authTypes.FAIL_ACCOUNT_SETUP:
			return {
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
				error: null,
			};
		case authTypes.SUCCESS_LOGIN_USER:
			return {
				...state,
				token:  payload.data.token,
				data: payload,
				isLoading: false,
				isAuthenticated: true,
				errMessage: null,
				error: null
			};
		case authTypes.FAIL_LOGIN_USER:
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: null,
				error: payload
			};
		
		

		case authTypes.START_LOGIN_WITH_OTP_USER:
			return { 
				...state, 
				token: null,
				data: null,
				isLoading: true,
				isAuthenticated: false,
				errMessage: null,
				error: null,
			};
		case authTypes.SUCCESS_LOGIN_WITH_OTP_USER:
			return {
				...state,
				token:  null,
				data: payload,
				isLoading: false,
				isAuthenticated: true,
				errMessage: null,
				error: null
			};
		case authTypes.FAIL_LOGIN_WITH_OTP_USER:
			return {
				...state,
				token: null,
				data: null,
				isLoading: false,
				isAuthenticated: false,
				errMessage: null,
				error: payload
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