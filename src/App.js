import React, { Suspense, useEffect } from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

import AuthLayout from "./layout/auth/authlayout";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";
import Setup from "./pages/auth/setup/setup";

import Fallback from "./components/fallback/fallback"

import { connect } from "react-redux";
// import SandboxOne from "./sandbox/sandboxOne";

import OtpLogin from "./pages/auth/otplogin/otplogin";
import { fetchUser } from "./redux/user/action";
import Layout from "./layout/app/layout";
import Overview from "./pages/app/overview/overview";
import Account from "./pages/app/account/account";
import Approach from "./pages/app/approach/approach";
import Banking from "./pages/app/banking/banking";
import CryptoTransfers from "./pages/app/cryptotransfers/cryptotransfers";
import Documentation from "./pages/app/documentation/documentation";
import HGVault from "./pages/app/HGvault/hgvault";
import Order from "./pages/app/order/order";
import Position from "./pages/app/positions/positions";
import ResearchCenter from "./pages/app/researchcenter/researchcenter";
import About from "./pages/app/about/about";

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
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<Fallback/>}>
						<Routes>
							{/* <Route path="/" element={<SandboxOne/>}/> */}
							<Route path="/auth" element={<AuthLayout/>}>
								<Route path="/auth/register" element={<Register/>}/>
								<Route path="/auth/setup" element={<Setup/>}/>
								<Route path="/auth/login" element={<Login/>}/>
								<Route path="/auth/login/otp" element={<OtpLogin/>}/>
								<Route path="/auth/forgotpassword" element={<ForgotPassword/>}/>
								<Route path="/auth/resetpassword/:resetToken" element={<ResetPassword/>}/>
							</Route>

							<Route path="/admin" element={<Layout/>}>
								<Route path="/admin/dashboard" element={<Overview/>}/>
								<Route path="/admin/about" element={<About/>}/>
								<Route path="/admin/account" element={<Account/>}/>
								<Route path="/admin/approach" element={<Approach/>}/>
								<Route path="/admin/banking" element={<Banking/>}/>
								<Route path="/admin/crypto-transfers" element={<CryptoTransfers/>}/>
								<Route path="/admin/documentation" element={<Documentation/>}/>
								<Route path="/admin/hg-vault" element={<HGVault/>}/>
								<Route path="/admin/order" element={<Order/>}/>
								<Route path="/admin/positions" element={<Position/>}/>
								<Route path="/admin/research-center" element={<ResearchCenter/>}/>
							</Route>
						</Routes>
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
		</div>
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