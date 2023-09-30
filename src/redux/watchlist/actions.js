import watchlistTypes from "./types";
import axios from "axios";

export const fetchWatchlistStart = () => ({
	type: watchlistTypes.START_FETCH_WATCHLIST,
});

export const fetchWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_FETCH_WATCHLIST,
	payload: token,
});

export const fetchWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_FETCH_WATCHLIST,
	payload: errMessage,
});

export const postWatchlistStart = () => ({
	type: watchlistTypes.START_POST_WATCHLIST,
});

export const postWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_POST_WATCHLIST,
	payload: token,
});

export const postWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_POST_WATCHLIST,
	payload: errMessage,
});

export const editWatchlistStart = () => ({
	type: watchlistTypes.START_POST_WATCHLIST,
});

export const editWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_POST_WATCHLIST,
	payload: token,
});

export const editWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_POST_WATCHLIST,
	payload: errMessage,
});

export const addAssetsToWatchlistStart = () => ({
	type: watchlistTypes.START_ADD_ASSETS_WATCHLIST,
});

export const addAssetsToWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_ADD_ASSETS_WATCHLIST,
	payload: token,
});

export const addAssetsToWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_ADD_ASSETS_WATCHLIST,
	payload: errMessage,
});

export const deleteWatchlistStart = () => ({
	type: watchlistTypes.START_DELETE_WATCHLIST,
});

export const deleteWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_DELETE_WATCHLIST,
	payload: token,
});

export const deleteWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_DELETE_WATCHLIST,
	payload: errMessage,
});

export const deleteAllWatchlistStart = () => ({
	type: watchlistTypes.START_DELETE_ALL_WATCHLIST,
});

export const deleteAllWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_DELETE_ALL_WATCHLIST,
	payload: token,
});

export const deleteAllWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_DELETE_ALL_WATCHLIST,
	payload: errMessage,
});

export const deleteSymbolWatchlistStart = () => ({
	type: watchlistTypes.START_DELETE_SYMBOL_WATCHLIST,
});

export const deleteSymbolWatchlistSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_DELETE_SYMBOL_WATCHLIST,
	payload: token,
});

export const deleteSymbolWatchlistFail = (errMessage) => ({
	type: watchlistTypes.FAIL_DELETE_SYMBOL_WATCHLIST,
	payload: errMessage,
});

export const fetchWatchlist = (token, userID, accountID) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/watchlist//fetch/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets//fetch/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(fetchWatchlistStart());
			dispatch(fetchWatchlistSuccess(res));
		} catch (error) {
			console.log("Fetch assets error", error);
			dispatch(fetchWatchlistFail(error));
		}
	};
};

export const postWatchlist = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/watchlist/new`,
				// `https://henriotgroup.onrender.com/api/watchlist/new`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(postWatchlistStart());
			dispatch(postWatchlistSuccess(res));
		} catch (error) {
			console.log("Fetch assets error", error);
			dispatch(postWatchlistFail(error));
		}
	};
};

//add assets to watchlist
export const addAssetsToWatchlist = (token, data, accountID, userID, watchlistID, symbol) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:8100/api/watchlist/add/assets/${accountID}/${userID}/${watchlistID}/${symbol}`,
				// `https://henriotgroup.onrender.com/api/watchlist/add/assets/${accountID}/${userID}/${watchlistID}/${symbol}`,
				data,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);
			dispatch(addAssetsToWatchlistStart());
			dispatch(addAssetsToWatchlistSuccess(res));
		}
		catch (error) {
			console.log("Fetch assets error", error);
			dispatch(addAssetsToWatchlistFail(error));
		}
	}
}

export const editWatchlist = (token, watchlistItemID) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/watchlist/edit/${watchlistItemID}`,
				// `https://henriotgroup.onrender.com/api/watchlist/edit/${watchlistItemID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(editWatchlistStart());
			dispatch(editWatchlistSuccess(res));
		} catch (error) {
			console.log("Fetch assets error", error);
			dispatch(editWatchlistFail(error));
		}
	};
};

export const deleteAllWatchlist = (token, accountID, userID,) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/watchlist//fetch/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets//fetch/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deleteAllWatchlistStart());
			dispatch(deleteAllWatchlistSuccess(res));
		} catch (error) {
			console.log("Fetch assets error", error);
			dispatch(deleteAllWatchlistFail(error));
		}
	};
};

//delete by symbol
export const deleteSymbolWatchlist = (token, accountID, userID, watchlistID, symbol) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/watchlist/delete/single/${accountID}/${userID}/${watchlistID}/${symbol}`,
				// `https://henriotgroup.onrender.com/api/assets/delete/${symbol}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deleteSymbolWatchlistStart());
			dispatch(deleteSymbolWatchlistSuccess(res));
		} catch (error) {
			console.log("Fetch assets error", error);
			dispatch(deleteSymbolWatchlistFail(error));
		}
	};
};
