import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ErrorBoundary from "./error/errorboundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<PersistGate persistor={persistor}>
// 					{/* <ErrorBoundary> */}
// 						<HelmetProvider>
// 							<BrowserRouter>
// 								<App />
// 							</BrowserRouter>
// 						</HelmetProvider>
// 					{/* </ErrorBoundary> */}
// 			</PersistGate>
// 		</Provider>
// 	</React.StrictMode>

// );


serviceWorkerRegistration.register();
reportWebVitals();