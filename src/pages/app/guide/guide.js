import React from 'react';
import { Outlet } from "react-router-dom";
import Page from '../../../components/UI/Page';

const Guide = () => {
	return (
		<Page title="Guide">
			<Outlet/>
		</Page>
	)
}

export default Guide