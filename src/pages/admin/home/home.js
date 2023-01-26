import React from 'react'

import { Grid } from '@mui/material';
import { styled } from '@mui/system';

import { cardItems } from "./info";
import AdminHomeCard from './sections/card';

const StyledGrid = styled(Grid)(({theme}) => ({

}))

const StyledGridItems = styled(Grid)(({theme}) => ({

}))

const AdminHome = () => {
	return (
		<StyledGrid container spacing={3}>
			{
				cardItems.map((el, i) => (
					<StyledGridItems key={i} item xs={12} sm={12} md={6} lg={3} xl={3}>
						<AdminHomeCard data={el}/>
					</StyledGridItems>
				))
			}
			<StyledGridItems item xs={12} sm={12} md={6} lg={4} xl={4}>

			</StyledGridItems>
		</StyledGrid>
	)
}

export default AdminHome