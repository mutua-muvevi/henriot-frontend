import activityTypes from "./types";
import axios from "axios"


export const fetchActivitiesStart = () => ({
	type: activityTypes.START_FETCH_ACTIVITIES
})

export const fetchActivitiesSuccess = (portfolio) => ({
	type: activityTypes.SUCCESS_FETCH_ACTIVITIES,
	payload: portfolio,
})

export const fetchActivitiesFail = (errMessage) => ({
	type: activityTypes.FAIL_FETCH_ACTIVITIES,
	payload: errMessage,
})


export const fetchActivitiesByTypesStart = () => ({
	type: activityTypes.START_FETCH_ACTIVITIES_BY_TYPES
})

export const fetchActivitiesByTypesSuccess = (portfolio) => ({
	type: activityTypes.SUCCESS_FETCH_ACTIVITIES_BY_TYPES,
	payload: portfolio,
})

export const fetchActivitiesByTypesFail = (errMessage) => ({
	type: activityTypes.FAIL_FETCH_ACTIVITIES_BY_TYPES,
	payload: errMessage,
})


export const fetchActivities = (token, userID, accountID) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/portfolio/fetch/all/${userID}/${accountID}`,
				// `https://henriotgroup.onrender.com/api/portfolio/fetch/all/${userID}/${accountID}`,
				{
					headers: {
						Authorization:`${token}`,
					}
				}
			)
			dispatch(fetchActivitiesStart())
			dispatch(fetchActivitiesSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchActivitiesFail(error.response))
		}
	}
}


export const fetchActivitiesByTypes = (token, userID, accountID, activityType) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`http://localhost:8100/api/portfolio/fetch/all/${userID}/${accountID}/${activityType}`,
				// `https://henriotgroup.onrender.com/api/portfolio/fetch/all/${userID}/${accountID}/${activityType}`,
				{
					headers: {
						Authorization:`${token}`,
					}
				}
			)
			dispatch(fetchActivitiesByTypesStart())
			dispatch(fetchActivitiesByTypesSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchActivitiesByTypesFail(error.response))
		}
	}
}
