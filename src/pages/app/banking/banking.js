import React from 'react';
import { Outlet } from "react-router-dom";
import Page from '../../../components/Page';

const Banking = () => {
	return (
		<Page title="Banking">
			<Outlet/>
		</Page>
	)
}

export default Banking