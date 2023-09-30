import orderTypes from "./types";
import axios from "axios";

export const fetchOrderStart = () => ({
	type: orderTypes.START_FETCH_ORDER,
});

export const fetchOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_FETCH_ORDER,
	payload: token,
});

export const fetchOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_FETCH_ORDER,
	payload: errMessage,
});

export const postOrderStart = () => ({
	type: orderTypes.START_POST_ORDER,
});

export const postOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_POST_ORDER,
	payload: token,
});

export const postOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_POST_ORDER,
	payload: errMessage,
});

export const editOrderStart = () => ({
	type: orderTypes.START_POST_ORDER,
});

export const editOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_POST_ORDER,
	payload: token,
});

export const editOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_POST_ORDER,
	payload: errMessage,
});

export const addAssetsToOrderStart = () => ({
	type: orderTypes.START_ADD_ASSETS_ORDER,
});

export const addAssetsToOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_ADD_ASSETS_ORDER,
	payload: token,
});

export const addAssetsToOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_ADD_ASSETS_ORDER,
	payload: errMessage,
});

export const deleteOrderStart = () => ({
	type: orderTypes.START_DELETE_SINGLE_ORDER,
});

export const deleteOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_DELETE_SINGLE_ORDER,
	payload: token,
});

export const deleteOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_DELETE_SINGLE_ORDER,
	payload: errMessage,
});

export const deleteAllOrderStart = () => ({
	type: orderTypes.START_DELETE_ALL_ORDER,
});

export const deleteAllOrderSuccess = (token) => ({
	type: orderTypes.SUCCESS_DELETE_ALL_ORDER,
	payload: token,
});

export const deleteAllOrderFail = (errMessage) => ({
	type: orderTypes.FAIL_DELETE_ALL_ORDER,
	payload: errMessage,
});

export const fetchOrder = (token, userID, accountID) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/order/fetch/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets/fetch/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(fetchOrderStart());
			dispatch(fetchOrderSuccess(res));
		} catch (error) {
			console.log("Order action error", error);
			dispatch(fetchOrderFail(error));
		}
	};
};

export const postOrder = (token, values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8100/api/order/new`,
				// `https://henriotgroup.onrender.com/api/order/new`,
                values,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(postOrderStart());
			dispatch(postOrderSuccess(res));
		} catch (error) {
			console.log("Order action error", error);
			dispatch(postOrderFail(error));
		}
	};
};

export const editOrder = (token, orderID, values) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`http://localhost:8100/api/order/edit/${orderID}`,
				// `https://henriotgroup.onrender.com/api/order/edit/${orderID}`,
                values,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(editOrderStart());
			dispatch(editOrderSuccess(res));
		} catch (error) {
			console.log("Order action error", error);
			dispatch(editOrderFail(error));
		}
	};
};

export const deleteOrder = (token, accountID, userID, orderID) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/order/delete/single/${userID}/${accountID}/${orderID}}`,
				// `https://henriotgroup.onrender.com/api/assets/delete/single/${userID}/${accountID}/${orderID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deleteOrderStart());
			dispatch(deleteOrderSuccess(res));
		} catch (error) {
			console.log("Order action error", error);
			dispatch(deleteOrderFail(error));
		}
	};
};

export const deleteAllOrder = (token, accountID, userID,) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`http://localhost:8100/api/order/delete/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/assets/delete/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			dispatch(deleteAllOrderStart());
			dispatch(deleteAllOrderSuccess(res));
		} catch (error) {
			console.log("Order action error", error);
			dispatch(deleteAllOrderFail(error));
		}
	};
};
