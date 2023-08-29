import authTypes from "./types";
import axios from "axios";


export const startRegisterUser = () => ({
	type: authTypes.START_REGISTER_USER,
})

export const registerUserSuccess = (token) => ({
	type: authTypes.SUCCESS_REGISTER_USER,
	payload: token,
})

export const registerUserFail = (errMessage) => ({
	type: authTypes.FAIL_REGISTER_USER,
	payload: errMessage,
})


export const startLoginUser = () => ({
	type: authTypes.START_LOGIN_USER,
})

export const loginUserSuccess = (token) => ({
	type: authTypes.SUCCESS_LOGIN_USER,
	payload: token,
})

export const loginUserFail = (errMessage) => ({
	type: authTypes.FAIL_LOGIN_USER,
	payload: errMessage,
})


export const startOtpLoginUser = () => ({
	type: authTypes.START_LOGIN_WITH_OTP_USER,
})

export const otpLoginUserSuccess = (token) => ({
	type: authTypes.SUCCESS_LOGIN_WITH_OTP_USER,
	payload: token,
})

export const otpLoginUserFail = (errMessage) => ({
	type: authTypes.FAIL_LOGIN_WITH_OTP_USER,
	payload: errMessage,
})


export const startSetupUser = () => ({
	type: authTypes.START_ACCOUNT_SETUP,
})

export const setupUserSuccess = (data) => ({
	type: authTypes.SUCCESS_ACCOUNT_SETUP,
	payload: data,
})

export const setupUserFail = (errMessage) => ({
	type: authTypes.FAIL_ACCOUNT_SETUP,
	payload: errMessage,
})



export const loadForgotPassword = () => ({
	type: authTypes.START_FORGOT_PASSWORD,
})

export const postForgotPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_FORGOT_PASSWORD,
	payload: data,
})

export const postForgotPasswordFail = (errMessage) => ({
	type: authTypes.FAIL_FORGOT_PASSWORD,
	payload: errMessage,
})

export const loadResetPassword = () => ({
	type: authTypes.START_RESET_PASSWORD,
})

export const postResetPasswordSuccess = (data) => ({
	type: authTypes.SUCCESS_RESET_PASSWORD,
	payload: data,
})

export const postResetPasswordFail = (errMessage) => ({
	type: authTypes.FAIL_RESET_PASSWORD,
	payload: errMessage,
})

export const signOutUser = () => ({
	type: authTypes.LOGOUT_USER
})


export const registerUser = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8100/api/user/register`,
				// `https://henriotgroup.onrender.com/api/user/register`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			startRegisterUser()
			dispatch(registerUserSuccess(res))
		} catch (error) {
			dispatch(registerUserFail(error.response))
		}
	}
}


export const loginUserWithOtp = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8100/api/user/otplogin`,
				// `https://henriotgroup.onrender.com/api/user/otplogin`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				
			)
			startOtpLoginUser()
			dispatch(otpLoginUserSuccess(res))
		} catch (error) {
			dispatch(otpLoginUserFail(error.response))
		}
	}
}


export const loginUser = (values) => {
	return async (dispatch) => {
		try {console.log("CALUEES ACTON", values)
			const res = await axios.post(
				`http://localhost:8100/api/user/login`,
				// `https://henriotgroup.onrender.com/api/user/login`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
				
			)
			startLoginUser()
			dispatch(loginUserSuccess(res))
		} catch (error) {
			dispatch(loginUserFail(error.response))
		}
	}
}

export const setupUser = (values, token, id) => {
	return async (dispatch) => {
		try {
			debugger
			const res = await axios.put(
				`http://localhost:8100/api/user/setup/${id}`,
				// `https://henriotgroup.onrender.com/api/user/setup/${id}`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:`Bearer ${token}`,
					},
				}
			)
			startSetupUser()
			console.log("RES IS",res)
			dispatch(setupUserSuccess(res))
		} catch (error) {
			dispatch(setupUserFail(error.response))
		}
	}
}



export const forgotPassword = (values) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8100/api/user/forgotpassword`,
				// `https://henriotgroup.onrender.com/api/user/forgotpassword`,
				values,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			loadForgotPassword()
			dispatch(postForgotPasswordSuccess(res.data.data))
		} catch (error) {
			dispatch(postForgotPasswordFail(error.response.data.error))
		}
	}
}

export const resetPassword = (values, params) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`http://localhost:8100/api/user/resetpasword/${params}`,
				// `https://henriotgroup.onrender.com/api/user/resetpasword/${params}`,
				values,
				{
					headers: {
					"Content-Type": "application/json",
					},
				}
			)
			loadResetPassword()
			postResetPasswordSuccess(res.data.data)
		} catch (error) {
			dispatch(postResetPasswordFail(error.response.data.error))
		}
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		try {
			const storage = window.localStorage
			storage.clear()
		} catch (error) {
			console.log(error)
		}
	}
}