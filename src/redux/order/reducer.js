import orderTypes from "./types";

//cretate the initial state for each property
const initialState = {
	loading: false,

	order: [],
	orderError: null,

	postOrder: null,
	postOrderError: null,

	editOrder: null,
	editOrderError: null,

	deleteAllOrder: [],
	deleteAllOrderError: null,

	deleteSingleOrder: [],
	deleteSingleOrderError: null,
};


//create the order reducer
const orderReducer = (state = initialState, { type, payload }) => {
	switch (type){
		case orderTypes.START_FETCH_ORDER:
			return {
				...state,
				loading: true,
			};
		case orderTypes.SUCCESS_FETCH_ORDER:
			return {
				...state,
				loading: false,
				order: payload,
			};
		case orderTypes.FAIL_FETCH_ORDER:
			return {
				...state,
				loading: false,
				order: null,
				orderError: payload,
			};
	
		case orderTypes.START_POST_ORDER:
			return {
				...state,
				loading: true,
			};
		case orderTypes.SUCCESS_POST_ORDER:
			return {
				...state,
				loading: false,
				postOrder: payload,
				postOrderError: null
			};
		case orderTypes.FAIL_POST_ORDER:
			return {
				...state,
				loading: false,
				postOrder: null,
				postOrderError: payload,
			};
	
		case orderTypes.START_EDIT_ORDER:
			return {
				...state,
				loading: true,
			};
		case orderTypes.SUCCESS_EDIT_ORDER:
			return {
				...state,
				loading: false,
				editOrder: payload,
				editOrderError: null,
			};
		case orderTypes.FAIL_EDIT_ORDER:
			return {
				...state,
				loading: false,
				editOrder: null,
				editOrderError: payload,
			};
            
	
		case orderTypes.START_DELETE_ALL_ORDER:
			return {
				...state,
				loading: true,
			};
		case orderTypes.SUCCESS_DELETE_ALL_ORDER:
			return {
				...state,
				loading: false,
				deleteAllOrder: payload,
				deleteAllOrderError: null,
			};
		case orderTypes.FAIL_DELETE_ALL_ORDER:
			return {
				...state,
				loading: false,
				deleteAllOrder: null,
				deleteAllOrderError: payload,
			};
	
	
		case orderTypes.START_DELETE_SINGLE_ORDER:
			return {
				...state,
				loading: true,
			};
		case orderTypes.SUCCESS_DELETE_SINGLE_ORDER:
			return {
				...state,
				loading: false,
				deleteSingleOrder: payload,
				deleteSingleOrderError: null,
			};
		case orderTypes.FAIL_DELETE_SINGLE_ORDER:
			return {
				...state,
				loading: false,
				deleteSingleOrder: null,
				deleteSingleOrderError: payload,
			};
	

		default:
			return state;
	}
}

export default orderReducer;