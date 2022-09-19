import React from 'react';
import { Outlet } from "react-router-dom";
import Page from '../../../components/Page';

const WealthManagement = () => {
	return (
		<Page title="Wealth Management">
			<Outlet/>
		</Page>
	)
}

export default WealthManagement