import React from 'react';
import { Outlet } from "react-router-dom";
import Page from '../../../components/UI/Page';

const Banking = () => {
	return (
		<Page title="Banking">
			<Outlet/>
		</Page>
	)
}

export default Banking