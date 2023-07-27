import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// routes
import Router from './routes';

// theme
import ThemeProvider from './theme';

// locales
import ThemeLocalization from './locales';

//@mui
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

//components
import ScrollToTop from "./components/UI/ScrollToTop";
import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";
import SnackbarProvider from "./components/snackbar";
import { MotionLazyContainer } from "./components/animate";
import { ThemeSettings, SettingsProvider } from "./components/settings";
import ErrorBoundary from "./error/errorboundary";

//auth provider
import { AuthProvider } from "./auth/JwtContext";
import { HelmetProvider } from "react-helmet-async";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";


const App = () => {

	return (
		<React.StrictMode>
			<AuthProvider>
				<HelmetProvider>
					<ReduxProvider store={store}>
						<PersistGate persistor={persistor}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<SettingsProvider>
									<BrowserRouter>
										<ScrollToTop />
										<MotionLazyContainer>
											<ErrorBoundary>
												<ThemeProvider>
													<ThemeSettings>
														<ThemeLocalization>
															<SnackbarProvider>
																<BaseOptionChartStyle />
																<Router />
															</SnackbarProvider>
														</ThemeLocalization>
													</ThemeSettings>
												</ThemeProvider>
											</ErrorBoundary>
										</MotionLazyContainer>
									</BrowserRouter>
								</SettingsProvider>
							</LocalizationProvider>
						</PersistGate>
					</ReduxProvider>
				</HelmetProvider>
			</AuthProvider>
		</React.StrictMode>
	);
}

export default App;