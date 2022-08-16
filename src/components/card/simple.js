import React from 'react'

import { Box, Card, Typography } from '@mui/material';
import { styled } from "@mui/system";

const StyledSimpleCard = styled(Card)(({ theme }) => ({
	padding: "0",
}))

const SimpleCard = ({children}) => {
	return (
		<StyledSimpleCard raised>
			{children}
		</StyledSimpleCard>
	)
}

export default SimpleCard