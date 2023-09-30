import portfolioTypes from "./types";

const initialState = {
	loading: false,
	portfolio: [],
	portfolioError: null
}

const portfolioReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case portfolioTypes.START_FETCH_PORTFOLIO:
			return {
				...state,
				loading: true,
			};
		case portfolioTypes.SUCCESS_FETCH_PORTFOLIO:
			return {
				...state,
				loading: false,
				portfolio: payload,
			};
		case portfolioTypes.FAIL_FETCH_PORTFOLIO:
			return {
				...state,
				loading: false,
				portfolio: null,
				portfolioError: payload,
			};
	
		default:
			return state;
	}
}

export default portfolioReducer