import assetsTypes from "./types";

const initialState = {
	loading: false,

	allAssets:null,
	allAssetsError: null,

	singleAsset:null,
	singleAssetError: null,
};

const assetsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case assetsTypes.START_FETCH_ASSETS:
			return {
				...state,
				loading: true,
			};
		case assetsTypes.SUCCESS_FETCH_ASSETS:
			return {
				...state,
				loading: false,
				allAssets: payload,
			};
		case assetsTypes.FAIL_FETCH_ASSETS:
			return {
				...state,
				loading: false,
				allAssets: null,
				allAssetsError: payload,
			};

		default:
			return state;
	}
};

export default assetsReducer;
