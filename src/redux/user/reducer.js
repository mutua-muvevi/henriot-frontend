import userTypes from "./types";

const initialState = {
	loading: false,
	// me:null,
	meError: null,
	// user:null,
	userError: null,
	// users:null,
	usersError: null,
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userTypes.START_FETCH_USER:
			return {
				...state,
				loading: true,
			};
		case userTypes.SUCCESS_FETCH_USER:
			return {
				...state,
				loading: false,
				user: payload,
			};
		case userTypes.FAIL_FETCH_USER:
			return {
				...state,
				loading: false,
				user: null,
				userError: payload,
			};

		case userTypes.START_FETCH_ALL_USERS:
			return {
				...state,
				loading: true,
			};
		case userTypes.SUCCESS_FETCH_ALL_USERS:
			return {
				...state,
				loading: false,
				users: payload,
			};
		case userTypes.FAIL_FETCH_ALL_USERS:
			return {
				...state,
				loading: false,
				users: null,
				usersError: payload,
			};

		case userTypes.START_FETCH_ME:
			return {
				...state,
				loading: true,
			};
		case userTypes.SUCCESS_FETCH_ME:
			return {
				...state,
				loading: false,
				me: payload,
			};
		case userTypes.FAIL_FETCH_ME:
			return {
				...state,
				loading: false,
				me: null,
				meError: payload,
			};

		case userTypes.START_SETUP_USER:
			return {
				...state,
				setUp: null,
				isLoading: true,
			};
		case userTypes.SUCCESS_SETUP_USER:
			return {
				...state,
				setUp: payload,
				isLoading: false,
			};
		case userTypes.FAIL_SETUP_USER:
			return {
				setUp: null,
				isLoading: false,
				setupError: payload,
			};

		default:
			return state;
	}
};

export default userReducer;
