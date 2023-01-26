import React from 'react';

import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { transactionCards } from "./info";
import AdminTransactionCard from './sections/card';
import TransfersTable from './sections/transfers';

const StyledWrapper = styled(Grid)(({ theme }) => ({

}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const StyledCard = styled(Card)(({ theme }) => ({
	height: 130
}))

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	height: "100%"
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))


const AdminTransaction = () => {
	return (
		<StyledWrapper container spacing={3}>
			{
				transactionCards.map((el, i) => (					
					<StyledGridItem key={i} item xs={12} sm={12} md={6} lg={3} xl={3}>
						<AdminTransactionCard data={el}/>
					</StyledGridItem>
				))
			}
			<StyledGridItem item xs={12} sm={12} md={6} lg={3} xl={3}>
				<StyledCard>
					<StyledCardActionArea>
						<StyledCardContent>
							<Typography variant="h3" color="text.secondary">
								Initiate transfer
							</Typography>
						</StyledCardContent>
					</StyledCardActionArea>
				</StyledCard>
			</StyledGridItem>
			<StyledGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
				<TransfersTable/>
			</StyledGridItem>
		</StyledWrapper>
	)
}

export default AdminTransaction