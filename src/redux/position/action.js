import positionTypes from "./types";
import axios from "axios";

export const fetchAllPositionsStart = () => ({
	type: positionTypes.START_FETCH_ALL_POSITIONS,
});

export const fetchAllPositionsSuccess = (position) => ({
	type: positionTypes.SUCCESS_FETCH_ALL_POSITIONS,
	payload: position,
});

export const fetchAllPositionsFail = (errMessage) => ({
	type: positionTypes.FAIL_FETCH_ALL_POSITIONS,
	payload: errMessage,
});



export const fetchSinglePositionStart = () => ({
	type: positionTypes.START_FETCH_SINGLE_POSITION,
});

export const fetchSinglePositionSuccess = (position) => ({
	type: positionTypes.SUCCESS_FETCH_SINGLE_POSITION,
	payload: position,
});

export const fetchSinglePositionFail = (errMessage) => ({
	type: positionTypes.FAIL_FETCH_SINGLE_POSITION,
	payload: errMessage,
});



export const deletePositionStart = () => ({
	type: positionTypes.START_DELETE_SINGLE_POSITION,
});

export const deletePositionSuccess = (position) => ({
	type: positionTypes.SUCCESS_DELETE_SINGLE_POSITION,
	payload: position,
});

export const deletePositionFail = (errMessage) => ({
	type: positionTypes.FAIL_DELETE_SINGLE_POSITION,
	payload: errMessage,
});



export const deleteAllPositionStart = () => ({
	type: positionTypes.START_DELETE_ALL_POSITIONS,
});

export const deleteAllPositionSuccess = (position) => ({
	type: positionTypes.SUCCESS_DELETE_ALL_POSITIONS,
	payload: position,
});

export const deleteAllPositionFail = (errMessage) => ({
	type: positionTypes.FAIL_DELETE_ALL_POSITIONS,
	payload: errMessage,
});



export const fetchAllPositions = (token, userID, accountID) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/position/fetch/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets/fetch/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(fetchAllPositionsStart());
			dispatch(fetchAllPositionsSuccess(res));
		} catch (error) {
			console.log("Position action error", error);
			dispatch(fetchAllPositionsFail(error));
		}
	};
};

export const fetchSinglePosition = (token, userID, accountID, symbol) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/position/fetch/all/${userID}/${accountID}/${symbol}`,
				// `https://henriotgroup.onrender.com/api/position/fetch/all/${userID}/${accountID}/${symbol}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(fetchSinglePositionStart());
			dispatch(fetchSinglePositionSuccess(res));
		} catch (error) {
			console.log("Position action error", error);
			dispatch(fetchSinglePositionFail(error));
		}
	};
};


export const deletePosition = (token, accountID, userID, symbol) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/position/delete/single/${userID}/${accountID}/${symbol}}`,
				// `https://henriotgroup.onrender.com/api/assets/delete/single/${userID}/${accountID}/${symbol}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deletePositionStart());
			dispatch(deletePositionSuccess(res));
		} catch (error) {
			console.log("Position action error", error);
			dispatch(deletePositionFail(error));
		}
	};
};

export const deleteAllPosition = (token, accountID, userID,) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/position/delete/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets/delete/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deleteAllPositionStart());
			dispatch(deleteAllPositionSuccess(res));
		} catch (error) {
			console.log("Position action error", error);
			dispatch(deleteAllPositionFail(error));
		}
	};
};
