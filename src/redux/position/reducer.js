import positionTypes from "./types";

//cretate the initial state for each property
const initialState = {
	loading: false,

	position: [],
	positionError: null,

	singlePosition: null,
	singlePositionError: null,

	editPosition: null,
	editPositionError: null,

	deleteAllPosition: null,
	deleteAllPositionError: null,

	deleteSinglePosition: null,
	deleteSinglePositionError: null,
};

//create the position reducer
const positionReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case positionTypes.START_FETCH_ALL_POSITIONS:
			return {
				...state,
				loading: true,
			};
		case positionTypes.SUCCESS_FETCH_ALL_POSITIONS:
			return {
				...state,
				loading: false,
				position: payload,
			};
		case positionTypes.FAIL_FETCH_ALL_POSITIONS:
			return {
				...state,
				loading: false,
				position: null,
				positionError: payload,
			};

		case positionTypes.START_FETCH_SINGLE_POSITION:
			return {
				...state,
				loading: true,
			};
		case positionTypes.SUCCESS_FETCH_SINGLE_POSITION:
			return {
				...state,
				loading: false,
				singlePosition: payload,
				singlePositionError: null,
			};
		case positionTypes.FAIL_FETCH_SINGLE_POSITION:
			return {
				...state,
				loading: false,
				singlePosition: null,
				singlePositionError: payload,
			};

		case positionTypes.START_DELETE_SINGLE_POSITION:
			return {
				...state,
				loading: true,
			};
		case positionTypes.SUCCESS_DELETE_SINGLE_POSITION:
			return {
				...state,
				loading: false,
				deleteSinglePosition: payload,
				deleteSinglePositionError: null,
			};
		case positionTypes.FAIL_DELETE_SINGLE_POSITION:
			return {
				...state,
				loading: false,
				deleteSinglePosition: null,
				deleteSinglePositionError: payload,
			};

		case positionTypes.START_DELETE_ALL_POSITIONS:
			return {
				...state,
				loading: true,
			};
		case positionTypes.SUCCESS_DELETE_ALL_POSITIONS:
			return {
				...state,
				loading: false,
				deleteAllPosition: payload,
				deleteAllPositionError: null,
			};
		case positionTypes.FAIL_DELETE_ALL_POSITIONS:
			return {
				...state,
				loading: false,
				deleteAllPosition: null,
				deleteAllPositionError: payload,
			};

		default:
			return state;
	}
};

export default positionReducer;
