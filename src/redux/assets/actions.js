import assetsTypes from "./types";
import axios from "axios";

export const fetchAssetsStart = () => ({
	type: assetsTypes.START_FETCH_ASSETS,
});

export const fetchAssetsSuccess = (token) => ({
	type: assetsTypes.SUCCESS_FETCH_ASSETS,
	payload: token,
});

export const fetchAssetsFail = (errMessage) => ({
	type: assetsTypes.FAIL_FETCH_ASSETS,
	payload: errMessage,
});

export const fetchAssets = (token) => {
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

			dispatch(fetchAssetsStart)
			dispatch(fetchAssetsSuccess(res))
            
        } catch (error) {
            console.log("Fetch assets error", error)
			dispatch(fetchAssetsFail(error))
        }
	};
};
