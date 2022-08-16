import userTypes from "./types";
import axios from "axios"

export const fetchUserStart = () => ({
	type: userTypes.START_FETCH_USER
})

export const fetchUserSuccess = (token) => ({
	type: userTypes.SUCCESS_FETCH_USER,
	payload: token,
})

export const fetchUserFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USER,
	payload: errMessage,
})


export const fetchUser = (token) => {
	return async (dispatch) => {
		console.log("FETCHING USER...")
		try {
			const res = await axios.get(
				`http://localhost:3000/api/user/me`,
				{
					headers: {
						Authorization:`Bearer ${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUserSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchUserFail(error.response))
		}
	}
}