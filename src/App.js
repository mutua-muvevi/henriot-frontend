import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

import AuthLayout from "./layout/auth/authlayout";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPassword from "./pages/auth/forgotpassword/forgotpassword";
import ResetPassword from "./pages/auth/resetpassword/resetpassword";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Routes>
						<Route path="/auth" element={<AuthLayout/>}>
							<Route path="/auth/register" element={<Register/>}/>
							<Route path="/auth/login" element={<Login/>}/>
							<Route path="/auth/forgotpassword" element={<ForgotPassword/>}/>
							<Route path="/auth/resetpassword/:resetToken" element={<ResetPassword/>}/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
