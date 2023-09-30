import watchlistTypes from "./types";

//cretate the initial state for each property
const initialState = {
	loading: false,

	watchlist: [],
	watchlistError: null,

	postWatchlist: null,
	postWatchlistError: null,

	addAssetsToWatchlist: null,
	addAssetsToWatchlistError: null,

	editWatchlist: null,
	editWatchlistError: null,

	deleteAllWatchlist: [],
	deleteAllWatchlistError: null,

	deleteSymbolWatchlist: [],
	deleteSymbolWatchlistError: null,
};


//create the watchlist reducer
const watchlistReducer = (state = initialState, { type, payload }) => {
	switch (type){
		case watchlistTypes.START_FETCH_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_FETCH_WATCHLIST:
			return {
				...state,
				loading: false,
				watchlist: payload,
			};
		case watchlistTypes.FAIL_FETCH_WATCHLIST:
			return {
				...state,
				loading: false,
				watchlist: null,
				watchlistError: payload,
			};
	
		case watchlistTypes.START_POST_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_POST_WATCHLIST:
			return {
				...state,
				loading: false,
				postWatchlist: payload,
				postWatchlistError: null
			};
		case watchlistTypes.FAIL_POST_WATCHLIST:
			return {
				...state,
				loading: false,
				postWatchlist: null,
				postWatchlistError: payload,
			};
	
		case watchlistTypes.START_EDIT_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_EDIT_WATCHLIST:
			return {
				...state,
				loading: false,
				editWatchlist: payload,
				editWatchlistError: null,
			};
		case watchlistTypes.FAIL_EDIT_WATCHLIST:
			return {
				...state,
				loading: false,
				editWatchlist: null,
				editWatchlistError: payload,
			};
	
		case watchlistTypes.START_ADD_ASSETS_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_ADD_ASSETS_WATCHLIST:
			return {
				...state,
				loading: false,
				addAssetsToWatchlist: payload,
				addAssetsToWatchlistError: null,
			};
		case watchlistTypes.FAIL_ADD_ASSETS_WATCHLIST:
			return {
				...state,
				loading: false,
				addAssetsToWatchlist: null,
				addAssetsToWatchlistError: payload,
			};
	
		case watchlistTypes.START_DELETE_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_DELETE_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteAllWatchlist: payload,
				deleteAllWatchlistError: null,
			};
		case watchlistTypes.FAIL_DELETE_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteAllWatchlist: null,
				deleteAllWatchlistError: payload,
			};
	
		case watchlistTypes.START_DELETE_ALL_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_DELETE_ALL_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteAllWatchlist: payload,
				deleteAllWatchlistError: null,
			};
		case watchlistTypes.FAIL_DELETE_ALL_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteAllWatchlist: null,
				deleteAllWatchlistError: payload,
			};
	
	
		case watchlistTypes.START_DELETE_SYMBOL_WATCHLIST:
			return {
				...state,
				loading: true,
			};
		case watchlistTypes.SUCCESS_DELETE_SYMBOL_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteSymbolWatchlist: payload,
				deleteSymbolWatchlistError: null,
			};
		case watchlistTypes.FAIL_DELETE_SYMBOL_WATCHLIST:
			return {
				...state,
				loading: false,
				deleteSymbolWatchlist: null,
				deleteSymbolWatchlistError: payload,
			};
	

		default:
			return state;
	}
}

export default watchlistReducer;