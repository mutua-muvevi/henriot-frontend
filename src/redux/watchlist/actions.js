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

export const deleteWatchlistsStart = () => ({
	type: watchlistTypes.START_FETCH_WATCHLIST,
});

export const deleteWatchlistsSuccess = (token) => ({
	type: watchlistTypes.SUCCESS_FETCH_WATCHLIST,
	payload: token,
});

export const deleteWatchlistsFail = (errMessage) => ({
	type: watchlistTypes.FAIL_FETCH_WATCHLIST,
	payload: errMessage,
});

export const fetchWatchlist = (token) => {
	return async (dispatch) => {
        try {
            const res = await axios.get(
                `http://localhost:8100/api/assets/fetch/all`,
                // `https://henriotgroup.onrender.com/api/assets/fetch/all`,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

			dispatch(fetchWatchlistStart)
			dispatch(fetchWatchlistSuccess(res))
            
        } catch (error) {
            console.log("Fetch assets error", error)
			dispatch(fetchWatchlistFail(error))
        }
	};
};
