import userTypes from "./types";
import axios from "axios"

export const fetchUserStart = () => ({
	type: userTypes.START_FETCH_USER
})

export const fetchUserSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_USER,
	payload: user,
})

export const fetchUserFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_USER,
	payload: errMessage,
})


export const fetchUsersStart = () => ({
	type: userTypes.START_FETCH_ALL_USERS
})

export const fetchUsersSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_ALL_USERS,
	payload: user,
})

export const fetchUsersFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_ALL_USERS,
	payload: errMessage,
})



export const fetchMeStart = () => ({
	type: userTypes.START_FETCH_ME
})

export const fetchMeSuccess = (user) => ({
	type: userTypes.SUCCESS_FETCH_ME,
	payload: user,
})

export const fetchMeFail = (errMessage) => ({
	type: userTypes.FAIL_FETCH_ME,
	payload: errMessage,
})


export const startSetupUser = () => ({
	type: userTypes.START_SETUP_USER,
})

export const setupUserSuccess = (token) => ({
	type: userTypes.SUCCESS_SETUP_USER,
	payload: token,
})

export const setupUserFail = (errMessage) => ({
	type: userTypes.FAIL_SETUP_USER,
	payload: errMessage,
})


export const fetchUser = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8100/api/user/fetch/me`,
				`https://henriotgroup.onrender.com/api/user/fetch/me`,
				{
					headers: {
						Authorization:`${token}`,
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

export const fetchAllUsers = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8100/api/user/fetch/all`,
				`https://henriotgroup.onrender.com/api/user/fetch/all`,
				{
					headers: {
						Authorization:`${token}`,
					}
				}
			)
			fetchUserStart()
			dispatch(fetchUsersSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchUsersFail(error.response.data.error))
		}
	}
}

export const fetchMe = (token) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				// `http://localhost:8100/api/user/fetch/me`,
				`https://henriotgroup.onrender.com/api/user/fetch/me`,
				{
					headers: {
						Authorization:`${token}`,
					}
				}
			)
			fetchMeStart()
			dispatch(fetchMeSuccess(res))
		} catch (error) {
			dispatch(fetchMeFail(error.response))
		}
	}
}

export const setupUser = (values, token) => {

	return async (dispatch) => {
		try {
			const formData = new FormData();
			formData.append("bio", values.bio)
			formData.append("profession", values.profession)
			formData.append("telephone", values.telephone)
			formData.append("image", values.image, values.image.name)

			const res = await axios.put(
				// `http://localhost:8100/api/user/setup`,
				`https://henriotgroup.onrender.com/api/user/setup`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization": token
					},
				}
			)
			
			startSetupUser()
			dispatch(setupUserSuccess(res))
			console.log(res)
		} catch (error) {
			dispatch(setupUserFail(error.response))
			console.log(error.response)
		}
	}
}