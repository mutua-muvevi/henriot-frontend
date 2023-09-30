import portfolioTypes from "./types";
import axios from "axios"


export const fetchPortfolioStart = () => ({
	type: portfolioTypes.START_FETCH_PORTFOLIO
})

export const fetchPortfolioSuccess = (portfolio) => ({
	type: portfolioTypes.SUCCESS_FETCH_PORTFOLIO,
	payload: portfolio,
})

export const fetchPortfolioFail = (errMessage) => ({
	type: portfolioTypes.FAIL_FETCH_PORTFOLIO,
	payload: errMessage,
})

export const fetchPortfolio = (token, userID, accountID) => {
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
			fetchPortfolioStart()
			dispatch(fetchPortfolioSuccess(res.data.data))
		} catch (error) {
			dispatch(fetchPortfolioFail(error.response))
		}
	}
}