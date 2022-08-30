import React from 'react'

import { Box, Card, Typography } from '@mui/material';
import { styled } from "@mui/system";

const StyledSimpleCard = styled(Card)(({ theme }) => ({
	padding: "0",
	overflow: "hidden",
	backgroundColor: "#fff"
}))

const SimpleCard = ({children}) => {
	return (
		<StyledSimpleCard>
			{children}
		</StyledSimpleCard>
	)
}

export default SimpleCard