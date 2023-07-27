import React from 'react';
import { Outlet } from "react-router-dom";
import Page from '../../../components/UI/Page';

const Trading = () => {
	return (
		<Page title="Trading">
			<Outlet/>
		</Page>
	)
}

export default Trading