import activityTypes from "./types";

const initialState = {
	loading: false,
	
	activity: [],
	activityError: null,

	activityByTypes: [],
	activityByTypesError: null
}

const activityReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case activityTypes.START_FETCH_ACTIVITIES:
			return {
				...state,
				loading: true,
			};
		case activityTypes.SUCCESS_FETCH_ACTIVITIES:
			return {
				...state,
				loading: false,
				activity: payload,
				activityError: null
			};
		case activityTypes.FAIL_FETCH_ACTIVITIES:
			return {
				...state,
				loading: false,
				activity: null,
				activityError: payload,
			};
	

		case activityTypes.START_FETCH_ACTIVITIES_BY_TYPES:
			return {
				...state,
				loading: true,
			};
		case activityTypes.SUCCESS_FETCH_ACTIVITIES_BY_TYPES:
			return {
				...state,
				loading: false,
				activityByTypes: payload,
				activityByTypesError: null
			};
		case activityTypes.FAIL_FETCH_ACTIVITIES_BY_TYPES:
			return {
				...state,
				loading: false,
				activityByTypes: null,
				activityByTypesError: payload,
			};
	
		default:
			return state;
	}
}

export default activityReducer