import React, { Suspense, useEffect } from "react";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import { connect } from "react-redux";
import { fetchUser } from "./redux/user/action";
import Fallback from "./components/fallback/fallback";

function App ({token, fetchMe}){

	useEffect(() => {
		try {
			fetchMe(token)
		} catch (error) {
			console.log("APP ERROR", error)
			// log error to db
		}
	}, [token, fetchMe])

	return (
		<ThemeProvider>
			<Suspense fallback={<Fallback/>}>
				<ScrollToTop />
				<Router />
			</Suspense>
		</ThemeProvider>
	);
}

const mapStateToProps = ({ auth }) => ({
	token: auth.token,
	errMessage: auth.errMessage,
	user: auth.data
})

const mapDispatchToProps = (dispatch) => ({
	fetchMe : (token) => dispatch(fetchUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);