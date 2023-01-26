import React from 'react';

import { Card, CardContent, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { BsGraphUp, BsGraphDown } from "react-icons/bs";

const StyledWrapper = styled(Card)(({ theme }) => ({
	height: 130
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));


const StyledStack = styled(Stack)(({theme}) => ({

}));

const styledTitleFont = {
	textTransform: "uppercase",
	fontWeight: "900"
}


const StyledMiddleStack = styled(Stack)(({ theme }) => ({
	width:"100%"
}))

const StyledBottomStack = styled(Stack)(({ theme }) => ({
	width:"100%"
}))

const AdminTransactionCard = ({ data }) => {
	return (
		<StyledWrapper>
			<StyledCardContent>
				<StyledStack
					direction="column"
					alignItems="flex-start"
					spacing={1.5}
				>
					<Typography variant="body2" color="text.secondary" style={styledTitleFont}>
						{data.title}
					</Typography>
					<StyledMiddleStack
						direction="row"
						justifyContent="space-between"
					>
						<Typography variant="h5" color="text.primary">
							{data.number}
						</Typography>
						graph
					</StyledMiddleStack>
					<StyledBottomStack
						direction="row"
						spacing={3}
					>
						{
							data.chip && data.chip === "success" ? (
								<BsGraphUp color={data.color} />
							) : (
								<BsGraphDown color={data.color} />
							)
						}
						<Typography variant="body2" color="text.secondary">
							from {data.previous}
						</Typography>
					</StyledBottomStack>
				</StyledStack>
			</StyledCardContent>
		</StyledWrapper>
	)
}

export default AdminTransactionCard